import { createContext, useEffect, useState, useContext } from "react";
import { Auth, DataStore } from "aws-amplify";
import { User } from "../models";

const AuthContext = createContext({});

const AuthContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);
  const [dbUser, setDbUser] = useState(null);

  const sub = authUser?.attributes?.sub;

  useEffect(() => {
    Auth.currentAuthenticatedUser({ bypassCache: true }).then(setAuthUser);
  }, []);

  const getExistUser = async() => {

    const fetchUser = await DataStore.query(User)
    const getSubId = fetchUser.filter((item)=>item.sub==sub)
    .then((users)=>console.log("getSubId-->", users))
    // console.log("getSubId-->", getSubId)
    // setDbUser(getSubId[0]);

  }

  useEffect(() => {
    // const getUser =  DataStore.query(User, (user) => user.sub("eq", sub)).then((users) =>
    //   setDbUser(users[0])
    // );
    // console.log("ExistsUser-->", getUser)
    getExistUser();
  }, [sub]);

  return (
    <AuthContext.Provider value={{ authUser, dbUser, sub, setDbUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

export const useAuthContext = () => useContext(AuthContext);
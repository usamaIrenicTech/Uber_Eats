import { createContext, useEffect, useState, useContext } from "react";
import { Auth, DataStore } from "aws-amplify";
import { User } from "../models";
import { Alert } from "react-native";

const AuthContext = createContext({});

const AuthContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);
  const [dbUser, setDbUser] = useState(null);

  const sub = authUser?.attributes?.sub;
  console.log("sub-->", sub);

  useEffect(() => {
    Auth.currentAuthenticatedUser({ bypassCache: true }).then(setAuthUser);
  }, []);
  console.log("authUser-->", authUser);

  const getExistUser = async () => {
    
      const fetchUser = await DataStore.query(User);
      console.log();
      const getSubId = fetchUser.filter((item) => item.sub == sub);
      setDbUser(getSubId[0]);

  };
  useEffect(() => {
    getExistUser();
  }, [sub]);
  console.log("dbUserAuth--->", dbUser);

  return (
    <AuthContext.Provider value={{ authUser, dbUser, sub, setDbUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

export const useAuthContext = () => useContext(AuthContext);

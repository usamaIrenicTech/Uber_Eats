import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeTabs from "./TabBottomNavigator";
import ProfileScreen from "../views/Profile";
import { useAuthContext } from "../Contexts/AuthContext";

const Stack = createNativeStackNavigator();

function StackNavigator() {
  const { dbUser } = useAuthContext();
  return (
    <Stack.Navigator>
        {/* <Stack.Screen name="HomeTabs" component={HomeTabs} options={{headerShown:false}}/>
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{headerShown:false}}/> */}
        {
          dbUser? (
            <Stack.Screen name="HomeTabs" component={HomeTabs} options={{headerShown:false}}/>
          ):(
          <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{headerShown:false}}/>

          )
        }
      
    </Stack.Navigator>
  );
}
export default StackNavigator;

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeTabs from "./TabBottomNavigator";

const Stack = createNativeStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home" >
      <Stack.Screen name="HomeTabs" component={HomeTabs} options={{headerShown:false}}/>
    </Stack.Navigator>
  );
}
export default StackNavigator;

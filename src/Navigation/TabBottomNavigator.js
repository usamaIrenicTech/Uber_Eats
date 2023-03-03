import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import ProfileScreen from "../views/Profile";
import OrderStackNavigator from "./OrderStack.js";
import HomeStackNavigator from "./HomeStack";
import { Entypo, FontAwesome5, AntDesign } from "@expo/vector-icons";

const Tab = createMaterialBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator barStyle={{ backgroundColor: "#fff" }}>
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="OrderRR"
        component={OrderStackNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="solution1" size={24} color={color} />
          ),
          headerShown:false
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="user-alt" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default HomeTabs;
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import restaurant from "../data/restaurants.json";
import HomeScreen from "../views/Home";
import RestaurantScreen from "../views/RestaurantsDetails";
import DishDetailScreen from "../views/DishDetails";
import BasketScreen from "../views/Basket";
import OrdersScreen from "../views/Orders";
import OrderDetailsScreen from "../views/OrdersDetails";
import ProfileScreen from "../views/Profile";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
const Stack = createNativeStackNavigator();
// export default function StackNavigator () {
//     return <MyStack/>
// }
function MyStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="HomeTabs" component={HomeTabs} />
    </Stack.Navigator>
  );
}

const Tab = createMaterialBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator barStyle={{ backgroundColor: '#fff' }}>
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
        name="Orders"
        component={OrderStackNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="solution1" size={24} color={color} />
          ),
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

const HomeStack = createNativeStackNavigator();
const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Restaurants" component={HomeScreen} />
      <HomeStack.Screen
        name="Restaurant"
        component={RestaurantScreen}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="Dish"
        component={DishDetailScreen}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="Basket"
        component={BasketScreen}
        options={{ headerShown: false }}
      />
    </HomeStack.Navigator>
  );
};

const OrderStack = createNativeStackNavigator();

const OrderStackNavigator = () => {
  return(
  <OrderStack.Navigator>
    <OrderStack.Screen name="Orders" component={OrdersScreen} />
    <OrderStack.Screen name="Order Details" component={OrderDetailsScreen} />
  </OrderStack.Navigator>
  )
};
// export default HomeStackNavigator

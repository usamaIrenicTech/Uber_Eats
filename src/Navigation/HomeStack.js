import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../views/Home/index";
import RestaurantScreen from "../views/RestaurantsDetails/index";
import BasketScreen from "../views/Basket/index";
import DishDetailScreen from "../views/DishDetails";
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
export default HomeStackNavigator;
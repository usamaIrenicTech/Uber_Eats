import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  FlatList,
} from "react-native";
import restaurant from "./src/data/restaurants.json";
import Home from "./src/views/Home";
import RestauratsDetails from "./src/views/RestaurantsDetails/index";
import MenuItemDetails from "./src/views/DishDetails";
import Basket from "./src/views/Basket/index";
import Orders from "./src/views/Orders";
import OrderDetails from "./src/views/OrdersDetails";
import { NavigationContainer } from "@react-navigation/native";
import RootStack from "./src/Navigation/StackNavigator";
// import RootStack from './src/Navigation/StackNavigator'
export default function App() {
  return (
   
    <SafeAreaView style={styles.container}>
       <NavigationContainer independent>
      <RootStack/>

    </NavigationContainer>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});

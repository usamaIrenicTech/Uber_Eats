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
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Home restaurant={restaurant}/> */}
      <RestauratsDetails/>
      {/* <MenuItemDetails/> */}
      {/* <Basket /> */}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

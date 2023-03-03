import react, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
  ActivityIndicator,
  Alert,
} from "react-native";
import DistListItem from "../../componets/DishListItem/index";
// import restaurants from "../../data/restaurants.json";
import Ionicons from "@expo/vector-icons/Ionicons";
import Header from "./Header";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import { DataStore } from "aws-amplify";
import { Restaurants, Dishes } from "../../models";
import { useBasketContext } from "../../Contexts/BasketContext";


export default function RestaurantItem() {
  const [restaurant, setRestaurant] = useState([]);
  const [dishes, setDishes] = useState([]);

  const navigation = useNavigation();
  const route = useRoute();
  const {  setRestaurant: setBasketRestaurant, basket, basketDishes} = useBasketContext();
  // console.log(dishes);
  // GET ID FROM HOME
  const id = route?.params?.id;
  console.log("RestauantsID-->", id);

  // GET RESTAURANTS WITH ID
  const getRestaurants = async () => {
    try {
      const restaurant = await DataStore.query(Restaurants, id);
      setRestaurant(restaurant);
      const dishes = await DataStore.query(Dishes);
      setDishes(dishes);
    } catch (e) {
      Alert.alert("Error", e.mesage);
    }
  };

  const dish = dishes.filter((item) => item.restaurantsID == id);
  console.log("dishID-->",dishes.filter((item) => item.restaurantsID)) 

  useEffect(() => {
    if (!id) {
      return;
    }
    setBasketRestaurant(null);
    // GET RESTAURANTS WITH ID
    getRestaurants();
  }, [id]);

  useEffect(() => {
    setBasketRestaurant(restaurant);
  }, [restaurant]);

  if (!restaurant) {
    return <ActivityIndicator size={"large"} color={"gray"} />;
  }

  return (
    <View style={styles.container} activeOpacity={0.6}>
      {/* RESTAURANT DISHES */}
      <FlatList
        data={dish}
        // keyExtractor={(item)=>item.name}
        ListHeaderComponent={() => <Header restaurant={restaurant} />}
        renderItem={({ item, index }) => {
          return <DistListItem dishes={item} />;
        }}
        showsVerticalScrollIndicator={false}
      />
      {/* LEFT ARRROW ICON */}
      <TouchableOpacity
        style={styles.icon_view}
        activeOpacity={0.7}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back-sharp" size={22} color="#000" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Basket")}
        style={styles.btn}
        activeOpacity={0.7}
      >
        <Text style={styles.btn_text}>Open Basket ({basketDishes.length})</Text>
      </TouchableOpacity>
    </View>
  );
}

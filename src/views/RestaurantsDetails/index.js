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
} from "react-native";
import DistListItem from "../../componets/DishListItem/index";
// import restaurants from "../../data/restaurants.json";
import Ionicons from "@expo/vector-icons/Ionicons";
import Header from "./Header";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import { DataStore } from '@aws-amplify/datastore';
import { Restaurants, Dishes } from "../../models";

export default function RestaurantItem() {
  const navigation = useNavigation();
  const route = useRoute();
  const [restaurant, setRestaurant] = useState([]);
  const [dishes, setDishes] = useState([]);

  // console.warn(dishes);
  const id = route.params?.id;
  // console.warn(id)
  const getDishes = async() =>{
    const dish = await DataStore.query(Dishes);
    
    setDishes(dish)
    // console.warn(dish);
  }
  DataStore.query(Dishes).then((dish)=>console.warn(dish))
  useEffect(() => {
    DataStore.query(Restaurants, id).then(setRestaurant);
    DataStore.query(Dishes, dish=>dish.restaurantsID("EQ", id).then(setDishes))
  
   getDishes()
  }, []);
  if (!restaurant) {
    return <ActivityIndicator size={"large"} color={"gray"} />;
  }
  return (
    
    <View style={styles.container} activeOpacity={0.6}>
      {/* RESTAURANT DISHES */}
      <FlatList
        data={dishes}
        // keyExtractor={(item)=>item.name}
        ListHeaderComponent={() => <Header restaurant={restaurant} />}
        renderItem={({ item, index }) => {
          return <DistListItem dish={item} />
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
    </View>
  );
}

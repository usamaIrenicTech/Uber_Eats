import react from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import DistListItem from "../../componets/DishListItem/index";
import restaurants from "../../data/restaurants.json";
import Ionicons from "@expo/vector-icons/Ionicons";
import Header from "./Header";
import styles from "./styles";
export default function RestaurantItem() {
  const restaurant = restaurants[0];
  return (
    // Container
    <View style={styles.container} activeOpacity={0.6}>
      {/* RESTAURANT DISHES */}
      <FlatList
        data={restaurant.dishes}
        ListHeaderComponent={() => <Header restaurant={restaurant} />}
        renderItem={({ item, index }) => {
          return <DistListItem dish={item} />;
        }}
        showsVerticalScrollIndicator={false}
      />
      {/* LEFT ARRROW ICON */}
      <TouchableOpacity style={styles.icon_view} activeOpacity={0.7}>
        <Ionicons name="arrow-back-sharp" size={22} color="#000" />
      </TouchableOpacity>
    </View>
  );
}

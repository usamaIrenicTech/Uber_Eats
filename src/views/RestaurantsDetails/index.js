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
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
export default function RestaurantItem() {
  const navigation = useNavigation();
  const route = useRoute()
  const restaurant = restaurants[0];
  // const id = route.params?.id;
  // console.warn(id)
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
      <TouchableOpacity style={styles.icon_view} activeOpacity={0.7} onPress={()=>navigation.goBack()}>
        <Ionicons name="arrow-back-sharp" size={22} color="#000" />
      </TouchableOpacity>
    </View>
  );
}

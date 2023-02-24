import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import restaurant from "../../data/restaurants.json";
import Ionicons from "@expo/vector-icons/Ionicons";
import BasketDishItem from "../../componets/BasketDishItem";
import { useNavigation } from "@react-navigation/native";
const restaurants = restaurant[0];
export default function Basket() {
  const navigation = useNavigation();
  const [quantity, setQuantity] = useState(0);
  const getTotal = () => {
    return (restaurants.d * quantity).toFixed(2);
  };
  return (
    <View style={styles.parent_view}>
      <TouchableOpacity style={styles.arrow_left} activeOpacity={0.6} onPress={()=>navigation.goBack()}>
        <Ionicons name="arrow-back-sharp" size={22} color="#000" />
      </TouchableOpacity>
      {/* ITEM NAME */}
      <Text style={styles.name}>{restaurants.name}</Text>
      {/* ITEM TITLE */}
      <Text style={styles.item_title}>Your item</Text>
      <FlatList
        data={restaurants.dishes}
        renderItem={({ item, index }) => {
          return <BasketDishItem basketDish={item} dishNumber={index + 1} />;
        }}
      />
      {/* SUBTOTAL VIEW */}
      <View style={styles.subTotal_view}>
        <Text style={styles.subTotal}>Subtotal</Text>
        <Text style={styles.sub_Price}>$82938</Text>
      </View>
      {/* TOTAL VIEW */}
      <View style={styles.total_view}>
        <Text style={styles.total}>Total</Text>
        <Text style={styles.total_Price}>$82938</Text>
      </View>
      {/* NEXT BUTTON */}
      <TouchableOpacity style={styles.button_view} activeOpacity={0.7}>
        <Text style={styles.button}>Next &#8226; $ 7637 </Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  parent_view: {
    flex: 1,
    width: "100%",
    marginVertical: 10,
  },
  arrow_left: {
    left: 10,
    marginTop:10
  },
  name: {
    fontSize: 25,
    fontWeight: "600",
    margin: 10,
    color: "#000",
  },
  item_title: {
    fontSize: 19,
    color: "#000",
    fontWeight: "bold",
    marginVertical: 10,
    marginHorizontal: 10,
  },
  button_view: {
    marginTop: "auto",
    backgroundColor: "#000",
    padding: 20,
    alignItems: "center",
    textAlign: "center",
    width: "95%",
    alignSelf: "center",
  },
  button: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    textTransform: "capitalize",
  },
  seperator: {
    height: 1,
    backgroundColor: "lightgrey",
    marginVertical: 10,
  },
  subTotal_view: {
    flexDirection: "row",
    marginHorizontal: 15,
    marginTop: 15,
  },
  subTotal: {
    fontWeight: "600",
    color: "#000",
    fontSize: 15,
  },
  sub_Price: {
    marginLeft: "auto",
  },
  total_view: {
    flexDirection: "row",
    marginHorizontal: 15,
    marginTop: 5,
    marginBottom: 20,
  },
  total: {
    fontWeight: "600",
    color: "#000",
    fontSize: 18,
  },
  total_Price: {
    marginLeft: "auto",
    fontSize: 16,
    fontWeight: "600",
  },
});

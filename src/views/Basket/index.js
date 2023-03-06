import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useState, useEffect } from "react";
import { AntDesign } from "@expo/vector-icons";
import restaurant from "../../data/restaurants.json";
import Ionicons from "@expo/vector-icons/Ionicons";
import BasketDishItem from "../../componets/BasketDishItem";
import { useNavigation } from "@react-navigation/native";
import { Basket, BasketDis } from "../../models";
import { DataStore } from "aws-amplify";
import { useBasketContext } from "../../Contexts/BasketContext";
import { useOrderContext } from "../../Contexts/OrderContext";
// const restaurants = restaurant[0];

export default function Baskets() {

  const [quantity, setQuantity] = useState(0);

  const navigation = useNavigation();

  const {restaurant, basketDishes, totalPrice, baskisDishesRes} = useBasketContext();
  const {createOrder} = useOrderContext();

  // console.log("BasketItem-->", basket)
  
  return (
    <View style={styles.parent_view}>
      <TouchableOpacity style={styles.arrow_left} activeOpacity={0.6} onPress={()=>navigation.goBack()}>
        <Ionicons name="arrow-back-sharp" size={22} color="#000" />
      </TouchableOpacity>
      {/* ITEM NAME */}
      <Text style={styles.name}>{restaurant?.name}</Text>
      {/* ITEM TITLE */}
      <Text style={styles.item_title}>Your item</Text>
      <FlatList
        data={basketDishes}
        renderItem={({ item, index }) => {
          return <BasketDishItem basketDish={item} dishNumber={index + 1} />;
        }}
      />

      {/* NEXT BUTTON */}
      <TouchableOpacity style={styles.button_view} activeOpacity={0.7} onPress={createOrder}>
        <Text style={styles.button}>Create Order &#8226; $ {totalPrice.toFixed(2)}</Text>
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

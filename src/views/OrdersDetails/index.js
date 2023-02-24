import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import React from "react";
import styles from "../OrdersDetails/styles";
import restaurant from '../../data/restaurants.json'
import OrderDetailsHeader from "./orderDetailsHeader";
import BasketDishItem from "../../componets/BasketDishItem";
const restaurants = restaurant;
export default function OrderDetails() {
  return (
    <View style={styles.parent_view}>
      <FlatList
        data={restaurants[0].dishes}
        ListHeaderComponent={OrderDetailsHeader}
        renderItem={({ item, index }) => {
          return <BasketDishItem basketDish={item} dishNumber={index + 1} />;
        }}
      />
    </View>
  );
}

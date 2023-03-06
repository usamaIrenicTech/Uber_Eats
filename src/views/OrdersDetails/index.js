import { View, Text, Image, StyleSheet, FlatList, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "../OrdersDetails/styles";
import restaurant from '../../data/restaurants.json'
import OrderDetailsHeader from "./orderDetailsHeader";
import BasketDishItem from "../../componets/BasketDishItem";
import { useRoute } from "@react-navigation/native";
import { useOrderContext } from "../../Contexts/OrderContext";

const restaurants = restaurant;
export default function OrderDetails() {

  const [order, setOrder] = useState([])

  const {getOrders} = useOrderContext();

  const route = useRoute();
  const id = route.params?.id;

  useEffect(()=>{
    getOrders(id);
  }, [])

  if(!order){
    return <ActivityIndicator size={"large"} Colors={'gray'}/>
  }

  return (
    <View style={styles.parent_view}>
      <FlatList
        data={order.dishes}
        ListHeaderComponent={<OrderDetailsHeader order={order}/>}
        renderItem={({ item, index }) => {
          return <BasketDishItem basketDish={item} dishNumber={index + 1} />;
        }}
      />
    </View>
  );
}

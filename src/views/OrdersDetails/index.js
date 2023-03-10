import { View, Text, Image, StyleSheet, FlatList, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "../OrdersDetails/styles";
import restaurant from '../../data/restaurants.json'
import OrderDetailsHeader from "./orderDetailsHeader";
import BasketDishItem from "../../componets/BasketDishItem";
import { useRoute } from "@react-navigation/native";
import { useOrderContext } from "../../Contexts/OrderContext";
import { Restaurants, Dishes } from "../../models";
import { DataStore } from "aws-amplify";

const restaurants = restaurant;
export default function OrderDetails() {
  const [order, setOrder] = useState([])
  const [orderDishes, setOrderDishes] = useState([]);
  
  // console.log("OrderRestau-->", orderDishes)
  const {getOrders, orders} = useOrderContext();
  console.log("orderDetais-->", order.dishes)
  const route = useRoute();
  const id = route.params?.id;
  const getOrderDishes = async(id) =>{
    getOrders(id)
    .then(setOrder)
    .catch((e)=>console.log(e.message))
  }
  const getCurrentDishes = async() => {
    const res = await DataStore.query(Dishes);
    setOrderDishes(res)
  }
console.log("orderId-->", id)
  useEffect(()=>{
    getOrderDishes(id);
    // getCurrentDishes();
  
  }, [])

  if(!order){
    return <ActivityIndicator size={"large"} Colors={'gray'}/>
  }

  return (
    <View style={styles.parent_view}>
      <FlatList
        data={order.dishes}
        ListHeaderComponent={<OrderDetailsHeader orders={order}/>}
        renderItem={({ item, index }) => {
          return <BasketDishItem basketDish={item} dishNumber={index + 1} />;
        }}
      />
    </View>
  );
}

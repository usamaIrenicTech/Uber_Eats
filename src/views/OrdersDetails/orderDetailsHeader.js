import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import styles from "../../views/OrdersDetails/styles";
import Orders from "../../data/orders.json";

const order = Orders[0];
export default function OrderDetailsHeader() {
  return (
    <View style={styles.parent_view}>
      <Image
        style={styles.image}
        source={{ uri: order.Restaurant.image }}
        resizeMode={"stretch"}
      />
      <View style={styles.row}>
        <Text style={styles.title}>{order.Restaurant.name}</Text>
        <Text style={styles.subTitle}>{order.status} &#8226; 2 days ago</Text>
      </View>
      <Text style={styles.orderTitle}>Your Orders</Text>
    </View>
  );
}

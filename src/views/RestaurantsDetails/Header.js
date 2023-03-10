import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import styles from "./styles";

export default function Header({ restaurant }) {
  return (
    <View style={styles.parent_view}>
      <Image
        style={styles.image}
        source={{ uri: restaurant.image }}
        resizeMode={"stretch"}
      />

      <View style={styles.row}>
        <Text style={styles.title}>{restaurant.name}</Text>
        <Text style={styles.subTitle}>
          $ {Number(restaurant.deliveryFee).toFixed(1)} &#8226;{" "}
          {restaurant.minDeliveryTime} - {restaurant.maxDeliveryTime} minutes{" "}
        </Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={styles.rating}> $ &#8226; {Number(restaurant.rating).toFixed(1)}
          </Text>
          <AntDesign name="star" size={15} color="orange" />
        </View>
      </View>
      <Text style={styles.menuTitle}>menu</Text>
    </View>
  );
}

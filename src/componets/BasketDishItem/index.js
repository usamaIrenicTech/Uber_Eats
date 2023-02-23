import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function BasketDishItem({ basketDish, dishNumber }) {
  return (
    <View style={styles.row}>
      <View style={styles.quantity_container}>
        <Text>{dishNumber}</Text>
      </View>
      <Text style={styles.item_name}>{basketDish.name}</Text>
      <Text style={styles.item_price}>$ {basketDish.price}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    marginVertical: 10,
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "lightgrey",
  },
  quantity_container: {
    width: 17,
    height: 17,
    backgroundColor: "lightgray",
    alignItems: "center",
    borderRadius: 4,
    marginHorizontal: 5,
  },
  itemName: {
    fontWeight: "500",
    color: "#000",
    marginLeft: 5,
  },
  item_price: {
    marginLeft: "auto",
  },
});

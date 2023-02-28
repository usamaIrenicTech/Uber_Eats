import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

export default function DistListItem({ dish }) {
  // console.warn(dish.name)
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.parent_view}
      activeOpacity={0.7}
      onPress={() => navigation.navigate("Dish")}
    >
      <View style={{ flex: 1 }}>
        <Text style={styles.name}>{dish.name}</Text>
        <Text style={styles.description} numberOfLines>
          {dish.description}
        </Text>
        <Text style={styles.price}>$ {dish.price}</Text>
      </View>
      {dish.image && (
        <Image source={{ uri: dish.image }} style={styles.image} />
      )}
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  parent_view: {
    margin: 10,
    borderColor: "lightgray",
    borderBottomWidth: 1,
    padding: 10,
    backgroundColor: "#fff",
    flexDirection: "row",
  },
  name: {
    fontSize: 17,
    color: "#000",
    fontWeight: "600",
    marginVertical: 2,
    letterSpacing: 0.5,
  },
  description: {
    fontSize: 15,
    color: "grey",
    fontWeight: "500",
    marginVertical: 5,
  },
  price: {
    fontSize: 17,
    color: "#000",
    fontWeight: "600",
    marginVertical: 5,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
});

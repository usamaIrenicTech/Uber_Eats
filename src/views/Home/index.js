import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";
import RestaurantItem from "../../componets/RestaurantItem/index";
import restaurant from '../../data/restaurants.json';
export default function Home() {
  return (
    <View style={styles.parent_view}>
      <FlatList
        data={restaurant}
        renderItem={({ item, index }) => {
          return <RestaurantItem restaurant={item} />;
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  parent_view: {
    marginHorizontal:10
  },
});

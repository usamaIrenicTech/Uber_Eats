import { View, Text, FlatList, StyleSheet } from "react-native";
import React, {useState, useEffect} from "react";
import RestaurantItem from "../../componets/RestaurantItem/index";
// import restaurant from '../../data/restaurants.json';
import { Restaurants } from "../../models";
import { DataStore } from "aws-amplify";
export default function Home() {
  const [restaurant, setRestaurant] = useState([]);
  useEffect(()=>{
    DataStore.query(Restaurants).then(setRestaurant);
  }, [])
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

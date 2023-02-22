import react from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native";

export default function RestaurantItem({ restaurant }) {
  return (
    // Container
   
    <TouchableOpacity style={StyleSheet.container} activeOpacity={0.6}>
      <Image style={styles.image} source={{ uri: restaurant.image }} />
      <View style={styles.row}>
    
      <Text style={styles.title}>{restaurant.name}</Text>
      <Text style={styles.rating}>{restaurant.rating}</Text>
      </View>
      <View>
        <Text style={styles.subTitle}>
          ${restaurant.deliveryFee}&#8226;
          {restaurant.minDeliveryTime} - {restaurant.maxDeliveryTime} minutes
        </Text>
        
        
        
      </View>
    </TouchableOpacity>
    
  );
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 100,
    borderWidth: 1,
    marginVertical: 10,
    padding:10
  },
  image: {
    width: "100%",
    aspectRatio: 5 / 3,
    marginVertical: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    // marginHorizontal: 5,
  },
  subTitle: {
    color: "gray",
    fontSize: 13,
    // marginHorizontal: 5,
    marginBottom:10,
    marginTop:5
  },
  row:{
    flexDirection:'row',
    alignItems:'center',
  },
  rating:{
    marginLeft:"auto",
    marginHorizontal:5,
    fontWeight:'bold',
  
  }
});

import react from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image,} from "react-native";
import { useNavigation } from "@react-navigation/native";

const  DEFAULT_IMAGE = "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant1.jpeg"
export default function RestaurantItem({ restaurant }) {
  const navigation = useNavigation();
  return (
    // Container
   
    <TouchableOpacity style={StyleSheet.container} activeOpacity={0.6} onPress={()=>navigation.navigate('Restaurant', {id:restaurant.id})}>
      <Image style={styles.image} source={{ uri: restaurant.image? restaurant.image:DEFAULT_IMAGE, }} />
      <View style={styles.row}>
    
      <Text style={styles.title}>{restaurant.name}</Text>
      <View style={styles.rating_view}>
      <Text style={styles.rating}>{restaurant.rating.toFixed(1)}</Text>
      </View>
      </View>
      <View>
        <Text style={styles.subTitle}>
          $ {restaurant.deliveryFee.toFixed(1)} &#8226; {restaurant.minDeliveryTime} - {restaurant.maxDeliveryTime} minutes
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
    // marginVertical: 10,
    // padding:10
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
  rating_view:{
    width:30, 
    height:30,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:20,
    backgroundColor:'#d6d2d2',
    marginLeft:'auto'
  },
  rating:{
    marginHorizontal:5,
    fontWeight:'bold',
  }
});

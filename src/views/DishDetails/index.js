import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, {useState} from "react";
import { AntDesign } from "@expo/vector-icons";
import restaurant from "../../data/restaurants.json";
import Ionicons from "@expo/vector-icons/Ionicons";
const dish = restaurant[0].dishes[0];
export default function MenuItemDetails() {
  const [quantity, setQuantity] = useState(0)
  const getTotal = () =>{
    return(dish.price*quantity).toFixed(2);
  }
  return (
    <View style={styles.parent_view}>
      <TouchableOpacity style={styles.arrow_left} activeOpacity={0.6}>
        <Ionicons name="arrow-back-sharp" size={22} color="#000" />
      </TouchableOpacity>
      <Text style={styles.name}>{dish.name}</Text>
      <Text style={styles.description}>{dish.description}</Text>
      <View style={styles.seperator} />
      <View style={styles.quantity_view}>
        <TouchableOpacity activeOpacity={0.6} onPress={()=>{quantity>0?setQuantity(quantity-1):null}}>
          <AntDesign name="minuscircleo" size={60} color="black" />
        </TouchableOpacity>
        <Text style={styles.item_quantity}>{quantity}</Text>
        <TouchableOpacity activeOpacity={0.6} onPress={()=> setQuantity(quantity+1)}>
          <AntDesign name="pluscircleo" size={60} color="black" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button_view} activeOpacity={0.7}>
        <Text style={styles.button}>add {quantity} to baskets &#8226; ($ {getTotal()}) </Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  parent_view: {
    flex: 1,
    width: "100%",
    marginVertical: 10,
  },
  arrow_left: {
    left: 10,
  },
  name:{
    fontSize:25,
    fontWeight:'600',
    margin:10,
    color:'#000'
  },
  description:{
    fontSize:16,
    marginHorizontal:10,
    color:'#525252'
  },
  seperator: {
    height: 1,
    backgroundColor: "lightgray",
    marginVertical: 30,
  },
  quantity_view: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 50,
  },
  item_quantity: {
    marginHorizontal: 20,
    fontSize: 25,
    color: "#333",
  },
  button_view:{
    marginTop:'auto',
    backgroundColor:'#000',
    padding:20,
    alignItems:'center',
    textAlign:'center',
    width:'95%',
    alignSelf:'center'
  },
  button:{
    color:'#fff',
    fontSize:18,
    fontWeight:'600',
    textTransform:'capitalize'
  }
});

import { View, Text, StyleSheet } from "react-native";
import React, {useEffect, useState} from "react";
import { Dishes } from "../../models";
import { DataStore } from "aws-amplify";


export default function BasketDishItem({ basketDish, dishNumber }) {

  const [basketDishes, setBasketDishes] = useState([])
  // console.log(basketDish.Dishes)

  const getBasketDish = async() => {
    try{
    const res = await basketDish.Dishes
    // let a = res;
    setBasketDishes(res);
    // console.log("dishesRes-->",a)
    }catch(e){
      console.log(e.message)
    }
  };

  useEffect(()=>{
    getBasketDish();
  }, []);

  return (
    <View style={styles.row}>
      <View style={styles.quantity_container}>
        <Text>{basketDish.quantity}</Text>
      </View>
      <Text style={styles.item_name}>{basketDishes?.name}</Text>
      <Text style={styles.item_price}>$ {basketDishes?.price}</Text>
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
  item_name: {
    fontWeight: "500",
    color: "#000",
    marginLeft: 5,
  },
  item_price: {
    marginLeft: "auto",
  },
});

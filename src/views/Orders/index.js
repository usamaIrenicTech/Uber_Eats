import { View, Text, StyleSheet, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import OrderItemList from '../../componets/OrderItemList';
import orders from '../../data/orders.json'
import { useOrderContext } from '../../Contexts/OrderContext';
import { DataStore } from 'aws-amplify';
import { Order } from '../../models';
// const order = orders; 

export default function Orders() {
    // const [orders, setOrers] = useState([])
    const {orders} = useOrderContext();

    // useEffect(()=>{
    //     DataStore.query(Order)
    //     .then(setOrers)
    // }, [])
    console.log("Orders-->", orders)
  return (
    <View style={styles.parent_view}>
        <Text style={styles.order_title}>Your Orders</Text>
        <FlatList 
        data={orders}
        renderItem={({item, index})=>{
            return <OrderItemList order={item}/>
        }}
        />
      
    </View>
  )
}
const styles = StyleSheet.create({
    parent_view:{
        flex:1
    },
    order_title:{
        fontSize:20,
        fontWeight:'700',
        alignSelf:'center',
        marginVertical:10
    }
})
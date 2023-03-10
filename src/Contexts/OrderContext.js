import { useState, useEffect, createContext, useContext } from "react";
import { DataStore } from "aws-amplify";
import { Order, OrderDish, Basket } from "../models";
import { useAuthContext } from "./AuthContext";
import { useBasketContext } from "./BasketContext";

const OrderContext = createContext({});

const OrderContextProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);
  const [orderDishes, setOrderDishes] = useState([]);
  const [orderItemDish, setOrderItemDish] = useState();
  console.log("orderItemDish-->", orderItemDish)
  const { dbUser } = useAuthContext();
  const { restaurant, totalPrice, basketDishes, basket } = useBasketContext();

  // console.log("OrderDishes--->", orderDishes)
  // GET ORDER DISHES
  const orderDishesRes = async () => {
    const res = basketDishes.map((item) => item.Dishes);
    await Promise.all(res)
      .then((val) => {
        return Promise.all(val.map((result) => setOrderDishes(result)));
      })
      .catch((error) => console.log(error));
  }
  
  console.log("DbUserOrders-->", dbUser)

  // console.log("basketDishesOrder-->",basketDishes)
  useEffect(() => {
    DataStore.query(Order, (o)=> o.userID("eq", dbUser.id))
      .then(setOrders)
      .catch((e) => e.message);
  }, [dbUser]);

    // CREATE ORDER 
  const createOrder = async () => {
      var newOrder = await DataStore.save(
        new Order({
          userID: dbUser.id,
          Restaurants: restaurant,
          status: "NEW",
          total: totalPrice,
        })
      );
    
    // ADD ALL BASKET DISHES TO THE ORDER
    await Promise.all(
      basketDishes.map((basketDish) => {
        DataStore.save(
          new OrderDish({
            quantity: basketDish.quantity,
            orderID: newOrder.id,
            Dishes: orderDishes
          })
        );
      })
    );

    // DELETE THE BASKET
    // await DataStore.delete(basket);

    setOrders([...orders, newOrder]);
  };

  const getOrders = async (id) => {
    const order = await DataStore.query(Order, id);
    const orderDishes = await DataStore.query(OrderDish);
    const fetchOrderDish = orderDishes.filter((item)=>item.orderID == id);
    // setOrderItemDish(fetchOrderId)
    return { ...order, dishes: fetchOrderDish };
  };
  return (
    <OrderContext.Provider value={{ createOrder, orders, getOrders, orderDishesRes }}>
      {children}
    </OrderContext.Provider>
  );
};

export default OrderContextProvider;
export const useOrderContext = () => useContext(OrderContext);

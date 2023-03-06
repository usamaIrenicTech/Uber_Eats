import { useState, useEffect, createContext, useContext } from "react";
import { DataStore } from "aws-amplify";
import { Order, OrderDish, Basket } from "../models";
import { useAuthContext } from "./AuthContext";
import { useBasketContext } from "./BasketContext";

const OrderContext = createContext({});

const OrderContextProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);

  const { dbUser } = useAuthContext();
  const { restaurant, totalPrice, basketDishes, basket } = useBasketContext();

  useEffect(() => {
    DataStore.query(Order)
      .then(setOrders)
      .catch((e) => e.message);
  }, []);

  const createOrder = async () => {
    // CREATE ORDER
    const newOrder = await DataStore.save(
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
            Dishes: basketDish?.Dishes,
          })
        );
      })
    );
    // DELETE THE BASKET
    await DataStore.delete(basket);

    setOrders([...orders, newOrder]);
  };

  const getOrders = async (id) => {
    const order = await DataStore.query(Order, id);
    const orderDishes = await DataStore.query(OrderDish, (od) =>
      od.orderID("eq", id)
    );
    return { ...order, Dishes: orderDishes };
  };
  return (
    <OrderContext.Provider value={{ createOrder, orders, getOrders }}>
      {children}
    </OrderContext.Provider>
  );
};

export default OrderContextProvider;
export const useOrderContext = () => useContext(OrderContext);

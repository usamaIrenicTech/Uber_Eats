import { createContext, useState, useEffect, useContext } from "react";
import { DataStore } from "aws-amplify";
import { Basket, BasketDis, Dishes } from "../models";
import { useAuthContext } from "./AuthContext";
import { Alert } from "react-native";

const BasketContext = createContext({});

const BasketContextProvider = ({ children }) => {
  const [restaurant, setRestaurant] = useState(null);
  const [basket, setBasket] = useState(null);
  const [theBasket, setTheBasket] = useState()
  const [basketDishes, setBasketDishes] = useState([]);
  console.log(basket);
  const { dbUser } = useAuthContext();
  console.log("dbUser-->", dbUser?.id);
  console.log("RestaurantsBasket-->", restaurant);

  const getExtBasket = async () => {
    const bask = await DataStore.query(Basket, (b) =>
      restaurantsID("eq".id).userID("eq", dbUser.id)
    )
      .then((baskets) => setBasket(baskets[0]))
      .catch((e) => console.log("BasketError", e.message));
    setBasket(bask);
    console.log("bask-->", bask);
    // const bas = basket.filter((item) => item.restaurantsID == restaurant.id);
    // console.log(bas);
  };
  const getExtBasDish = async() => {
    try{
      const newDish = await DataStore.query(BasketDis, (bd)=>bd.basketID("eq", theBasket.id))
      setBasketDishes([...basketDishes, newDish])
    }catch(e){
      console.log('Error', e.message);
    }
  }

  useEffect(() => {
    if (restaurant?.id) {
      getExtBasket();
      console.log("basket", basket);
    }
  }, [restaurant, dbUser]);
  useEffect(()=>{
    if(basket) {
      getExtBasDish()
    }
  }, [basket])

  const addDishToBasket = async (dish, quantity) => {
    console.log("addDishToBasket", dish, quantity);
    let theBasket = basket || await createNewBasket();
    setTheBasket(theBasket)
    const createBasDish = await DataStore.save(new BasketDis({quantity, Dishes:dish, basketID:theBasket.id}))
  };
  const createNewBasket = async () => {
    const newBasket = await DataStore.save(
      new Basket({ userID: dbUser.id, restaurantsID: restaurant.id })
    );
    setBasket(newBasket);
    return newBasket;
  };

  //   const [basketDishes, setBasketDishes] = useState([]);

  //   const totalPrice = basketDishes.reduce(
  //     (sum, basketDish) => sum + basketDish.quantity * basketDish.Dish.price,
  //     restaurant?.deliveryFee
  //   );

  //   useEffect(() => {
  //     DataStore.query(Basket, (b) =>
  //       b.restaurantID("eq", restaurant.id).userID("eq", dbUser.id)
  //     ).then((baskets) => setBasket(baskets[0]));
  //   }, [dbUser, restaurant]);

  //   useEffect(() => {
  //     if (basket) {
  //       DataStore.query(BasketDis, (bd) => bd.basketID("eq", basket.id)).then(
  //         setBasketDishes
  //       );
  //     }
  //   }, [basket]);

  //   const addDishToBasket = async (dish, quantity) => {
  //     // get the existing basket or create a new one
  //     let theBasket = basket || (await createNewBasket());

  //     // create a BasketDis item and save to Datastore
  //     const newDish = await DataStore.save(
  //       new BasketDis({ quantity, Dish: dish, basketID: theBasket.id })
  //     );

  //     setBasketDishes([...basketDishes, newDish]);
  //   };

  //   const createNewBasket = async () => {
  //     const newBasket = await DataStore.save(
  //       new Basket({ userID: dbUser.id, restaurantID: restaurant.id })
  //     );
  //     setBasket(newBasket);
  //     return newBasket;
  //   };

  return (
    <BasketContext.Provider
      value={{
        addDishToBasket,
        setRestaurant,
        // restaurant,
        basket,
        basketDishes,
        // totalPrice,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
};

export default BasketContextProvider;

export const useBasketContext = () => useContext(BasketContext);

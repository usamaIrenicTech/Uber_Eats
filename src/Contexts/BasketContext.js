import { createContext, useState, useEffect, useContext } from "react";
import { DataStore } from "aws-amplify";
import { Basket, BasketDis, Dishes } from "../models";
import { useAuthContext } from "./AuthContext";
import { Alert } from "react-native";

const BasketContext = createContext({});

const BasketContextProvider = ({ children }) => {

  const [restaurant, setRestaurant] = useState(null);
  const [basket, setBasket] = useState(null);
  const [basketDishes, setBasketDishes] = useState([]);
  const [forDishesPrice, setForDishesPrice] = useState([]);

  const { dbUser } = useAuthContext();

  console.log("BasketDish-->",basketDishes)
  console.log("forPrice-->", forDishesPrice)
  // console.log(basket);
  // console.log("dbUser-->", dbUser?.id);
  // console.log("RestaurantsBasket-->", restaurant);

  const baskisDishesRes = async() => {
    try{
    const res = await basketDishes[0].Dishes
    // let a = res;
    setForDishesPrice(res);
    }catch(e){
      console.log(e.message)
    }
  };

  // useEffect(()=>{
  //   baskisDishesRes();
  // }, [])
  
  const totalPrice = basketDishes?.reduce(
    (sum, basketDish)=> sum * basketDish.quantity + forDishesPrice.price, restaurant?.deliveryFee
  )
  console.log(totalPrice)
     

  const getExtBasket = async () => {
    const bask = await DataStore.query(Basket, (b) =>
      restaurantsID("eq".id).userID("eq", dbUser.id)
    )
      .then((baskets) => setBasket(baskets[0]))
      .catch((e) => console.log("BasketError", e.message));
    setBasket(bask);
    console.log("bask-->", bask);
  };

  // const getExtBasDish = async () => {
  //   try {
  //     const newDish = await DataStore.query(BasketDis, (bd) =>
  //       bd.basketID("eq", basket.id)
  //     );
  //     setBasketDishes(newDish);
  //   } catch (e) {
  //     console.log("Error", e.message);
  //   }
  // };

  useEffect(() => {
    if (restaurant?.id) {
      getExtBasket();
      console.log("basket", basket);
    }
  }, [restaurant, dbUser]);

  useEffect(() => {
    if (basket) {
      // getExtBasDish();
      DataStore.query(BasketDis, (bd) =>
        bd.basketID("eq", basket.id))
        .then(setBasketDishes)
        .catch((e)=>console.log(e.message));
    }
  }, [basket]);

  
 
  const addDishToBasket = async (dish, quantity) => {
    console.log("addDishToBasket", dish, quantity);
    let theBasket = basket || (await createNewBasket());
    const createBasDish = await DataStore.save(
      new BasketDis({ quantity, Dishes: dish, basketID: theBasket.id })
    );
    setBasketDishes([...basketDishes, createBasDish]);
  };
  

  const createNewBasket = async () => {
    const newBasket = await DataStore.save(
      new Basket({ userID: dbUser.id, restaurantsID: restaurant.id })
    );
    setBasket(newBasket);
    return newBasket;
  };

  return (
    <BasketContext.Provider
      value={{
        addDishToBasket,
        setRestaurant,
        restaurant,
        basket,
        basketDishes,
        totalPrice,
        baskisDishesRes
      }}
    >
      {children}
    </BasketContext.Provider>
  );
};

export default BasketContextProvider;

export const useBasketContext = () => useContext(BasketContext);

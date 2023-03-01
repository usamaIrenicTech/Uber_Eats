// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const OrderStatus = {
  "NEW": "NEW",
  "COOKING": "COOKING",
  "READY_FOR_PICKUP": "READY_FOR_PICKUP",
  "PICKED_UP": "PICKED_UP",
  "COMPLETED": "COMPLETED"
};

const { OrderDish, Order, BasketDis, Basket, User, Dishes, Restaurants } = initSchema(schema);

export {
  OrderDish,
  Order,
  BasketDis,
  Basket,
  User,
  Dishes,
  Restaurants,
  OrderStatus
};
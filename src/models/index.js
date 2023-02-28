// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Dishes, Restaurants } = initSchema(schema);

export {
  Dishes,
  Restaurants
};
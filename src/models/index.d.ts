import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";





type EagerDishes = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Dishes, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly image?: string | null;
  readonly description?: string | null;
  readonly price: number;
  readonly restaurantsID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyDishes = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Dishes, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly image?: string | null;
  readonly description?: string | null;
  readonly price: number;
  readonly restaurantsID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Dishes = LazyLoading extends LazyLoadingDisabled ? EagerDishes : LazyDishes

export declare const Dishes: (new (init: ModelInit<Dishes>) => Dishes) & {
  copyOf(source: Dishes, mutator: (draft: MutableModel<Dishes>) => MutableModel<Dishes> | void): Dishes;
}

type EagerRestaurants = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Restaurants, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly image: string;
  readonly name: string;
  readonly deliveryFee: number;
  readonly minDeliveryTime: number;
  readonly maxDeliveryTime: number;
  readonly rating?: number | null;
  readonly address: string;
  readonly lat: number;
  readonly lng: number;
  readonly Dishes?: (Dishes | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRestaurants = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Restaurants, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly image: string;
  readonly name: string;
  readonly deliveryFee: number;
  readonly minDeliveryTime: number;
  readonly maxDeliveryTime: number;
  readonly rating?: number | null;
  readonly address: string;
  readonly lat: number;
  readonly lng: number;
  readonly Dishes: AsyncCollection<Dishes>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Restaurants = LazyLoading extends LazyLoadingDisabled ? EagerRestaurants : LazyRestaurants

export declare const Restaurants: (new (init: ModelInit<Restaurants>) => Restaurants) & {
  copyOf(source: Restaurants, mutator: (draft: MutableModel<Restaurants>) => MutableModel<Restaurants> | void): Restaurants;
}
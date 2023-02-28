import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OrderDetailsScreen from "../views/OrdersDetails";
import OrderScreen from "../views/Orders/index";
const OrderStack = createNativeStackNavigator();

const OrderStackNavigator = () => {
  return (
    <OrderStack.Navigator>
      <OrderStack.Screen name="Orders" component={OrderScreen} />
      <OrderStack.Screen name="Order Details" component={OrderDetailsScreen} />
    </OrderStack.Navigator>
  );
};

export default OrderStackNavigator;
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Orders } from '../screens';
import { FONTS, COLORS } from '../themes';

const Stack = createNativeStackNavigator();

const OrdersNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Orders"
      screenOptions={() => ({
        headerStyle: {
          backgroundColor: COLORS.primary,
          height: 80,
        },
        headerTintColor: COLORS.black,
        headerTitleStyle: {
          fontFamily: FONTS.bold,
          fontSize: 16,
        },
        animation: 'fade_from_bottom',
      })}>
      <Stack.Screen name="Orders" component={Orders} />
    </Stack.Navigator>
  );
};

export default OrdersNavigator;

import { Ionicons } from '@expo/vector-icons';
import { createNativeStackNavigation } from '@react-navigation/native-stack';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { Categories, Products, ProductDetail } from '../screens';
import { COLORS } from '../themes';

const Stack = createNativeStackNavigation();

function ShopNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Categories"
      screenOptions={() => ({
        headerstyle: {
          backgroundColor: COLORS.primary,
          height: 80,
        },
        headerTintColor: COLORS.white,
        headerTitleStyle: {
          fontFamily: 'Niramit-Bold',
          fontSize: 16,
        },
        animation: 'fade_from_bottom',
      })}>
      <Stack.Screen name="Categories" component={Categories} />
      <Stack.Screen
        name="Products"
        component={Products}
        options={({ navigation, route }) => ({
          headerStyle: {
            backgroundColor: route.params.color,
          },
          headerLeft: () => (
            <TouchableOpacity style={styles.goBack} onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back-circle" size={30} color={COLORS.white} />
            </TouchableOpacity>
          ),
          title: route.params.name,
        })}
      />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={({ navigation, route }) => ({
          headerStyle: {
            backgroundColor: route.params.color,
          },
          headerLeft: () => (
            <TouchableOpacity style={styles.goBack} onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back-circle" size={30} color={COLORS.white} />
            </TouchableOpacity>
          ),
          title: route.params.name,
        })}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  goBack: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  goBackText: {
    fontSize: 14,
    color: COLORS.text,
  },
});

export default ShopNavigator;

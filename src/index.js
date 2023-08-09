import { useFonts } from 'expo-font';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { Provider } from 'react-redux';

import RootNavigator from './navigations/index';
import { store } from './store';
import { COLORS, FONTS } from './themes';

// const categoryDefault = {
//   categoryId: null,
//   color: COLORS.primary,
// };

export default function App() {
  const [loaded] = useFonts({
    [FONTS.bold]: require('../assets/fonts/Niramit-Bold.ttf'),
    [FONTS.light]: require('../assets/fonts/Niramit-Light.ttf'),
    [FONTS.medium]: require('../assets/fonts/Niramit-Medium.ttf'),
    [FONTS.regular]: require('../assets/fonts/Niramit-Regular.ttf'),
  });

  // const [isCategorySelected, setIsCategorySelected] = useState(false);
  // const [selectedCategory, setSelectedCategory] = useState(categoryDefault);

  // const headerTitle = isCategorySelected ? 'Products' : 'Categories';

  // const onHandleSelectCategory = ({ categoryId, color }) => {
  //   setSelectedCategory({ categoryId, color });
  //   setIsCategorySelected(!isCategorySelected);
  // };
  // const onHandleNavigate = () => {
  //   setIsCategorySelected(!isCategorySelected);
  //   setSelectedCategory(categoryDefault);
  // };

  if (!loaded) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator color={COLORS.primary} size="large" />
      </View>
    );
  }

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <RootNavigator />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

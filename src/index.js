import { useFonts } from 'expo-font';
import { SafeAreaView, StyleSheet, View, ActivityIndicator } from 'react-native';

import RootNavigator from './navigations/index';
import { COLORS } from './themes';

// const categoryDefault = {
//   categoryId: null,
//   color: COLORS.primary,
// };
export default function App() {
  const [loaded] = useFonts({
    'Niramit-Bold': require('../assets/fonts/Niramit-Bold.ttf'),
    'Niramit-Light': require('../assets/fonts/Niramit-Light.ttf'),
    'Niramit-Medium': require('../assets/fonts/Niramit-Medium.ttf'),
    'Niramit-Regular': require('../assets/fonts/Niramit-Regular.ttf'),
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
    <SafeAreaView style={styles.container}>
      <RootNavigator />
    </SafeAreaView>
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

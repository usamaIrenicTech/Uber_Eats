import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, FlatList } from 'react-native';
import restaurant from './src/data/restaurants.json'
import RestaurantItem from './src/componets/RestaurantItem';
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList 
      data={restaurant}
      renderItem={({item, index})=>{
        return(
        <RestaurantItem restaurant={item}/>
        )
      }}
      showsVerticalScrollIndicator={false}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal:10,
    marginVertical:20
  },
});

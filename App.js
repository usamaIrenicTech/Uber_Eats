// import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  FlatList,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./src/Navigation/StackNavigator";
import { Amplify, Analytics } from 'aws-amplify';
import awsconfig from './src/aws-exports';
import {withAuthenticator} from "aws-amplify-react-native";
import AuthContextProvider from "./src/Contexts/AuthContext";
// import Amplify, { Auth } from 'aws-amplify';
Amplify.configure({
  ...awsconfig,
  Analytics: { 
    disabled: true
  }
});

 function App() {

  return (
   
    <SafeAreaView style={styles.container}>
       <NavigationContainer independent>
         <AuthContextProvider>
      <RootNavigator/>
      </AuthContextProvider>
    </NavigationContainer>
      {/* <StatusBar style="auto" /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
export default withAuthenticator(App);
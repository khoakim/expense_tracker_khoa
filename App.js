import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import HomeScreen from "./src/screens/HomeScreen";
import ExpenseScreen from "./src/screens/ExpenseScreen";
import AddScreen from "./src/screens/AddScreen";
import LoginScreen from "./src/screens/LoginScreen";
import TransactionDetailsScreen from "./src/screens/TransactionDetailsScreen";

import { GlobalContextProvider } from "./src/context/GlobalContext";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <GlobalContextProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          {/* <Stack.Screen
            name="AddTransaction"
            component={AddTransactionScreen}
          /> */}
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Expense" component={ExpenseScreen} />
          <Stack.Screen name="Add" component={AddScreen} />
          {/* <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen
            name="TransactionDetails"
            component={TransactionDetailsScreen}
            options={({navigation}) => ({
              headerTitle: (props) => <Text>Index</Text>,
              headerRight: () => (
                <Button
                  onPress={() => navigation.navigate("Create")}
                  title="Info"
                  color="#00cc00"
                />
              ),
            })}
          /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </GlobalContextProvider>
  );
}

import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES, icons, images } from "../constants";
import TransactionList from "../components/TransactionList";
import { GlobalContext } from "../context/GlobalContext";
const ExpenseScreen = () => {
  const { transactions } = useContext(GlobalContext);
  return (
    <View style={{ paddingHorizontal: SIZES.padding - 5 }}>
      <TransactionList />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ExpenseScreen;

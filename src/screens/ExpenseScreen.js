import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES, icons, images } from "../constants";
import TransactionList from "../components/TransactionList";
import fetch from "../api/fetchData";
const ExpenseScreen = () => {
  useEffect(() => {
    console.log("category");
    const fetchData = async () => {
      fetch
        .get("/transaction")
        .then(response => {
          console.log("cat", response.data);
        })
        .catch(error => console.log(error));
      // const response = await fetch.get("/category");
      // console.log(`response.data`, response.data);
    };
    fetchData();
  }, []);
  return (
    <View style={{ paddingHorizontal: SIZES.padding - 5 }}>
      <TransactionList />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ExpenseScreen;

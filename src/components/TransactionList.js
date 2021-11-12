import React, { useContext, useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";

import { GlobalContext } from "../context/GlobalContext";
import { COLORS, FONTS, SIZES, icons, images } from "../constants";
import fetch from "../api/fetchData";
// import data from "../data/mockData";
const TransactionList = () => {
  const [catX, setcatX] = useState(null);
  const [data, setData] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const { transactions, categories } = useContext(GlobalContext);

  useEffect(() => {
    const newTXs =
      transactions &&
      transactions.map(transaction => {
        const cat = categories.filter(
          catogory => catogory.id === transaction.categoryId
        );
        // console.log(`cat`, cat);
        return {
          ...transaction,
          categoryName: cat[0].name,
          color: cat[0].color,
        };
      });
    // console.log(`newTXs`, newTXs);
    setData(newTXs);
  }, []);
  function setSelectCategoryByName(name) {
    let category = categories.filter(a => a.name == name);
    // console.log(`category`, category);
    setSelectedCategory(category[0]);
  }

  const renderItem = ({ item }) => (
    // {
    //   "id": 1,
    //   "note": "T1",
    //   "date": "11/11/2021",
    //   "amount": 100,
    //   "categoryName": "Education"
    //   "color":white
    // },

    // id: 1,
    // name: "Education",
    // icon: icons.education,
    // color: COLORS.yellow,
    <TouchableOpacity
      style={{
        flexDirection: "row",
        height: 40,
        paddingHorizontal: SIZES.radius,
        borderRadius: 10,
        backgroundColor:
          selectedCategory && selectedCategory.name == item.categoryName
            ? item.color
            : COLORS.white,
      }}
      onPress={() => {
        let categoryName = item.categoryName;
        // console.log(`categoryName`, categoryName);
        setSelectCategoryByName(categoryName);
      }}
    >
      {/* Name/Category */}
      <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
        <View
          style={{
            width: 20,
            height: 20,
            backgroundColor:
              selectedCategory && selectedCategory.name == item.categoryName
                ? COLORS.white
                : item.color,
            borderRadius: 5,
          }}
        />

        <Text
          style={{
            marginLeft: SIZES.base,
            color:
              selectedCategory && selectedCategory.name == item.categoryName
                ? COLORS.white
                : COLORS.primary,
            ...FONTS.h3,
          }}
        >
          {item.note}
        </Text>
      </View>

      {/* Expenses */}
      <View style={{ justifyContent: "center" }}>
        <Text
          style={{
            color:
              selectedCategory && selectedCategory.name == item.categoryName
                ? COLORS.white
                : COLORS.primary,
            ...FONTS.h3,
          }}
        >
          {/* {item.y} AUD - {item.label} */}
          {item.amount}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View>
      <View style={{ padding: SIZES.padding, width: 300 }}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => `${item.id}`}
        />
      </View>
      <Text h3>History</Text>
      {/* <ul className="list">
        {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
      </ul> */}

      {/* <View>
        <FlatList
          data={transactions}
          renderItem={({ item }) => {
            return (
              <View style={styles.list}>
                <Text>{item.text} </Text>
                <Text>{item.amount}</Text>
              </View>
            );
          }}
          keyExtractor={transaction => transaction.id}
        />
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default TransactionList;

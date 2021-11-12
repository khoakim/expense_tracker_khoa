import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

//Money formatter function
function moneyFormatter(num) {
  if (typeof num !== "undefined") {
    let p = num.toFixed(2).split(".");
    return (
      "$ " +
      p[0]
        .split("")
        .reverse()
        .reduce(function (acc, num, i, orig) {
          return num === "-" ? acc : num + (i && !(i % 3) ? "," : "") + acc;
        }, "") +
      "." +
      p[1]
    );
  } else return 0;
}

const IncomeExpenses = ({ navigation }) => {
  const { transactions } = useContext(GlobalContext);

  let income = 0;
  let expense = 0;
  const amounts =
    transactions && transactions.map(transaction => transaction.amount);

  income =
    amounts &&
    amounts.filter(item => item > 0).reduce((acc, item) => (acc += item), 0);

  expense =
    amounts &&
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
      -1;

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View
          style={{
            backgroundColor: "white",
            borderColor: "#20e01d",
            borderWidth: 1,
            borderRadius: 5,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: 100,
            width: 100,
          }}
        >
          <Text h4>Income</Text>
          <Text style={styles.moneyplus}>
            {transactions ? moneyFormatter(income) : 0}
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Expense")}>
        <View
          style={{
            backgroundColor: "white",
            borderColor: "#f07b6e",
            borderWidth: 2,
            borderRadius: 5,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",

            height: 100,
            width: 100,
          }}
        >
          <Text h4 style={styles.moneyminus}>
            Expense
          </Text>
          <Text style={styles.moneyminus}>
            -{transactions ? moneyFormatter(expense) : 0}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#fff',
    // padding : 20,
    display: "flex",
    justifyContent: "space-between",
    // margin:20,
    flexDirection: "row",
    width: 300,
    // background-color: #fff;
    // box-shadow: var(--box-shadow);
    // padding: 20px;
    // display: flex;
    // justify-content: space-between;
    // margin: 20px 0;
  },
  moneyplus: {
    // paddingRight: 50,
    // backgroundColor: "red",
  },
  moneyminus: {
    // paddingLeft: 50,
  },
});

export default IncomeExpenses;

import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

import Header from "../components/Header";
import Balance from "../components/Balance";
import IncomeExpenses from "../components/IncomeExpenses";

import AddTransaction from "../components/AddTransaction";
const HomeScreen = ({ navigation }) => {
  return (
    //
    <View style={styles.body}>
      <Header />
      <View style={styles.container}>
        <Balance />
      </View>
      <IncomeExpenses navigation={navigation} />
      {/* <View>
        <Button
          icon={<Icon name="arrow-right" size={15} color="white" />}
          title="Add"
          onPress={() => navigation.navigate("Add")}
        />
      </View> */}

      {/* <AddTransaction /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    // backgroundColor : '#f7f7f7',
    // display:'flex',
    flexDirection: "column",
    alignItems: "center",
    // justifyContent:'center',
    // // minHeight:'100vh',
    // margin:0,
    // fontFamily: 'Lato',

    // background: ;
    // display: flex;
    // flex-direction: column;
    // align-items: center;
    // justify-content: center;
    // min-height: 100vh;
    // margin: 0;
    // font-family: 'Lato', sans-serif;
  },
  container: {
    // margin : '30',
    // width : '350'
    // margin: 30px auto;
    // width: 350px;
  },
  list: {
    height: 300,
  },
});

export default HomeScreen;

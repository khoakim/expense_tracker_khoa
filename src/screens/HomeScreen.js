import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import Header from "../components/Header";
import Balance from "../components/Balance";
import IncomeExpenses from "../components/IncomeExpenses";
import TransactionList from "../components/TransactionList";
import AddTransaction from "../components/AddTransaction";
const HomeScreen = () => {
    return (
        // 
        <View style={styles.body}>
            <Header />
            <View style={styles.container}>
                <Balance />
                
            </View>
            <IncomeExpenses />
            <View style={styles.list}>
            <TransactionList />
            </View>
            
            <AddTransaction />
        </View>
    )

};

const styles=StyleSheet.create({
    body : {
        // backgroundColor : '#f7f7f7',
        // display:'flex',
        flexDirection:'column',
        alignItems:'center',
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
    container : {
        // margin : '30',
        // width : '350'
        // margin: 30px auto;
        // width: 350px;
    },
    list : {
        height : 100
    }
});

export default HomeScreen;
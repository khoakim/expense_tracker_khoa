import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { View, Text, StyleSheet } from 'react-native';

//Money formatter function
function moneyFormatter(num) {
  let p = num.toFixed(2).split('.');
  return (
    '$ ' +
    p[0]
      .split('')
      .reverse()
      .reduce(function (acc, num, i, orig) {
        return num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc;
      }, '') +
    '.' +
    p[1]
  );
}

 const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0);

  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  );

  return (
    <View style={styles.container}>
      <View >
      <Text h4 style={styles.moneyplus}>Income</Text>
      <Text style={styles.moneyplus}>{moneyFormatter(income)}</Text>
      </View>
      <View>       
      <Text h4 style={styles.moneyminus}>Expense</Text>
      <Text style={styles.moneyminus}>{moneyFormatter(expense)}</Text>
      </View>
    </View>
  )
}
const styles=StyleSheet.create({
  container: {
    // backgroundColor: '#fff',
    // padding : 20,
    display:'flex',
    justifyContent:'space-between',
    // margin:20,
    flexDirection:'row'

    // background-color: #fff;
    // box-shadow: var(--box-shadow);
    // padding: 20px;
    // display: flex;
    // justify-content: space-between;
    // margin: 20px 0;
  },
  moneyplus: {
    paddingRight:50
  },
  moneyminus: {
    paddingLeft:50
  }
});

export default IncomeExpenses;

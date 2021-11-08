import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { View, Text, StyleSheet } from 'react-native';
//Money formatter function
function moneyFormatter(num) {
  let p = num.toFixed(2).split('.');
  return (
    '$ ' + (p[0].split('')[0]=== '-' ? '-' : '') +
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

 const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0);

  return (
    <View>
      <Text h4>Your Balance</Text>
      <Text h1>{moneyFormatter(total)}</Text>
    </View>
  )
}

export default Balance;

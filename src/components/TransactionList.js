import React, { useContext } from 'react';
import { Transaction } from './Transaction';
import { View, Text, StyleSheet, FlatList} from 'react-native';

import { GlobalContext } from '../context/GlobalContext';

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
  // console.log(`transactions`, transactions);
  return (
    <View>
      <Text h3>History</Text>
      {/* <ul className="list">
        {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
      </ul> */}

      <FlatList
        data={transactions}
        renderItem={ ({item}) => {
          return (
            <View style={styles.list}>
              <Text>{item.text}   </Text>
            <Text>{item.amount}</Text>
              </View>
          )
        }}
        keyExtractor={ (transaction) => transaction.id}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  list : {
    flexDirection: 'row'
  }
})

export default TransactionList;
import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalContext';
import { View, Text, StyleSheet, Button, TextInput} from 'react-native';

const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit =() => {
    // e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    }

    addTransaction(newTransaction);
  }
  
  return (
    <View>
    <Text>Desc</Text>
    <TextInput 
    // style={styles.item} 
    onChangeText={setText} value={text} />
    <Text>Amount</Text>
    <TextInput
      // style={styles.item}
      onChangeText={setAmount}
      value={amount.toString()}
    />
    <Button
      title="Save"
      onPress={()=>onSubmit}
      // onPress={() => {
      //   updateBlogPost(item.id, title, content, () =>
      //     navigation.navigate("Index")
      //   );
      // }}
      />
  </View>
  );
}


export default AddTransaction;
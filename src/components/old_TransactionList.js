// import React, { useContext, useState } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   FlatList,
//   TouchableOpacity,
// } from "react-native";

// import { GlobalContext } from "../context/GlobalContext";
// import { COLORS, FONTS, SIZES, icons, images } from "../constants";

// import data from "../data/mockData";
// const TransactionList = () => {
//   const [categories, setCategories] = React.useState(data);
//   const [selectedCategory, setSelectedCategory] = React.useState(null);
//   const { transactions } = useContext(GlobalContext);

//   // console.log(`transactions`, transactions);

//   // label: `${percentage}%`,
//   // y: Number(item.y),
//   // expenseCount: item.expenseCount,
//   // color: item.color,
//   // name: item.name,
//   // id: item.id,
//   function setSelectCategoryByName(name) {
//     let category = categories.filter(a => a.name == name);
//     setSelectedCategory(category[0]);
//   }

//   const renderItem = ({ item }) => (
//     <TouchableOpacity
//       style={{
//         flexDirection: "row",
//         height: 40,
//         paddingHorizontal: SIZES.radius,
//         borderRadius: 10,
//         backgroundColor:
//           selectedCategory && selectedCategory.name == item.name
//             ? item.color
//             : COLORS.white,
//       }}
//       onPress={() => {
//         let categoryName = item.name;
//         setSelectCategoryByName(categoryName);
//       }}
//     >
//       {/* Name/Category */}
//       <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
//         <View
//           style={{
//             width: 20,
//             height: 20,
//             backgroundColor:
//               selectedCategory && selectedCategory.name == item.name
//                 ? COLORS.white
//                 : item.color,
//             borderRadius: 5,
//           }}
//         />

//         <Text
//           style={{
//             marginLeft: SIZES.base,
//             color:
//               selectedCategory && selectedCategory.name == item.name
//                 ? COLORS.white
//                 : COLORS.primary,
//             ...FONTS.h3,
//           }}
//         >
//           {item.name}
//         </Text>
//       </View>

//       {/* Expenses */}
//       <View style={{ justifyContent: "center" }}>
//         <Text
//           style={{
//             color:
//               selectedCategory && selectedCategory.name == item.name
//                 ? COLORS.white
//                 : COLORS.primary,
//             ...FONTS.h3,
//           }}
//         >
//           {/* {item.y} AUD - {item.label} */}
//           asdadasdsa
//         </Text>
//       </View>
//     </TouchableOpacity>
//   );

//   return (
//     <View>
//       <View style={{ padding: SIZES.padding, width: 300 }}>
//         <FlatList
//           data={data}
//           renderItem={renderItem}
//           keyExtractor={item => `${item.id}`}
//         />
//       </View>
//       <Text h3>History</Text>
//       {/* <ul className="list">
//         {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
//       </ul> */}

//       <View>
//         <FlatList
//           data={transactions}
//           renderItem={({ item }) => {
//             return (
//               <View style={styles.list}>
//                 <Text>{item.text} </Text>
//                 <Text>{item.amount}</Text>
//               </View>
//             );
//           }}
//           keyExtractor={transaction => transaction.id}
//         />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   list: {
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });

// export default TransactionList;

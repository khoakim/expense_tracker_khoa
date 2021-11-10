import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input } from "react-native-elements";

const AddScreen = () => {
  return (
    <View>
      <Input placeholder="BASIC INPUT" />

      <Input
        placeholder="INPUT WITH ICON"
        leftIcon={{ type: "font-awesome", name: "chevron-left" }}
      />

      <Input
        placeholder="INPUT WITH CUSTOM ICON"
        leftIcon={<Icon name="user" size={24} color="black" />}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default AddScreen;

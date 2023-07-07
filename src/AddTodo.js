import React from "react";
import { View, StyleSheet, TextInput, Button } from "react-native";

export const AddTodo = ({ onSubmit }) => {
  return (
    <View style={styles.block}>
      <TextInput style={styles.input} />
      <Button title="Добавить" />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    marginTop: 10,
    padding: 10,
    width: "70%",
    borderStyle: "solid",
    borderBottomWidth: 2,
    borderBottomColor: "#3949ab",
  },
  button: {},
});

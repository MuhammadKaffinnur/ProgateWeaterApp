import { StyleSheet, TextInput, View } from "react-native";
import React from "react";

const CustomTextInput = ({
  onChange,
  multiline,
  placeholder,
  numberOfLines,
  textValue,
}) => {
  return (
    <View styles={styles.container}>
      <TextInput
        onChangeText={onChange}
        multiline={multiline}
        placeholder={placeholder}
        numberOfLines={numberOfLines}
        defaultValue={textValue}
        style={styles.input}
      />
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    borderColor: "#DDDDDD",
    padding: 10,
  },
  container: {
    marginTop: 20,
  },
});

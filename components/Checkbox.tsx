import { Colors } from "@/constants/Colors";
import { Entypo } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from "react-native";
import { ThemedText } from "./ThemedText";

type TCheckboxProps = {
  message: string;
};

const Checkbox: React.FC<TCheckboxProps> = ({ message }) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={toggleCheckbox} style={styles.checkboxContainer}>
        <View style={[styles.checkbox]}>
          {isChecked ? (
            <Entypo name="check" size={22} color={Colors.general.textLink} />
          ) : null}
        </View>
      </Pressable>
      <ThemedText style={styles.checkboxLabel}>{message}</ThemedText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "10%",
  },
  checkbox: {
    width: 25,
    height: 25,
    borderWidth: 2,
    borderColor: "grey",
    marginRight: 10,
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  checkboxLabel: {
    width: "90%",
    fontSize: 14,
  },
});

export default Checkbox;

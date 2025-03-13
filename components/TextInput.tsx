import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TextInputProps as RNTextInputProps,
  Pressable,
} from "react-native";

type TFormInputProps = {
  label: string;
  placeholder: string;
  type?: "password";
} & RNTextInputProps;

const FormInput: React.FC<TFormInputProps> = ({
  label,
  placeholder,
  type = "password",
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>{label}</Text>
      </View>
      <View style={[styles.inputContainer]}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          secureTextEntry={!showPassword}
          {...rest}
        />
        {type === "password" && (
          <Pressable
            style={styles.icon}
            onPress={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <Feather name="eye-off" color={"grey"} size={25} />
            ) : (
              <Feather name="eye" color={"grey"} size={25} />
            )}
          </Pressable>
        )}
      </View>
    </View>
  );
};

export default FormInput;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginTop: 2,
    marginBottom: 2,
  },
  labelContainer: {
    textAlign: "left",
    marginTop: 5,
    marginBottom: 5,
  },
  label: {
    fontSize: 16,
    color: "grey",
    fontWeight: "bold",
    fontFamily: "PoppinsBold",
  },
  inputContainer: {
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: "grey",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    height: 50,
    padding: 10,
    color: "grey",
    fontSize: 16,
    width: "90%",
  },
  icon: {
    width: "10%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

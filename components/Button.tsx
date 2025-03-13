import { Colors } from "@/constants/Colors";
import React from "react";
import {
  ActivityIndicator,
  ButtonProps,
  Pressable,
  PressableProps,
  StyleProp,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  ViewStyle,
} from "react-native";

type TButtonProps = {
  children: React.ReactNode;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  icon?: JSX.Element;
  iconAlign?: "left" | "right";
  loading?: boolean;
} & PressableProps;

const LoadingComponent = () => {
  return (
    <View style={styles.loadingContainer}>
      <View style={styles.loaderContainer}>
        <ActivityIndicator size={"small"} color={"white"} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textLoading}>Processing</Text>
      </View>
    </View>
  );
};

const Button: React.FC<TButtonProps> = ({
  children,
  onPress,
  style,
  icon,
  iconAlign = "left",
  loading,
  ...rest
}) => {
  const theme = useColorScheme();

  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.button,
        style,
        {
          backgroundColor: loading
            ? Colors.general.buttonDisable
            : Colors.general.button,
        },
      ]}
      disabled={loading}
      {...rest}
    >
      <View style={styles.buttonInner}>
        {iconAlign === "left" && icon}
        {loading ? <LoadingComponent /> : children}
        {iconAlign === "right" && icon}
      </View>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 5,
  },
  buttonInner: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 3,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
  loadingContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 8,
  },
  loaderContainer: {},
  textContainer: {},
  textLoading: {
    color: "white",
    fontSize: 20,
  },
});

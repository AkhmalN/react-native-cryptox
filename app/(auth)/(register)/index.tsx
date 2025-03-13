import Button from "@/components/Button";
import Checkbox from "@/components/Checkbox";
import FormInput from "@/components/TextInput";
import { ThemedText } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";
import { AntDesign } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";
import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";

export default function RegisterScreen() {
  const router = useRouter();
  const theme = useColorScheme();
  const [input, setInput] = useState<{ email: string; password: string }>({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState<boolean>(false);

  function handleSubmit() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.push("/(main)");
    }, 3000);
  }

  function handleRedirectGoogle() {}

  function handleRedirectApple() {}

  return (
    // Container
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      {/* Title */}
      <View style={styles.titleContainer}>
        <ThemedText type="title" style={styles.title}>
          Hi Register Your Account!
        </ThemedText>
      </View>

      {/* Form */}
      <View style={styles.formContainer}>
        {/* Form input */}
        <View style={styles.form}>
          <FormInput
            placeholder="Input Your Full Name"
            label="Full Name"
            keyboardType="email-address"
          />
          <FormInput
            placeholder="Input Email Address"
            label="Email Address"
            keyboardType="email-address"
          />
          <FormInput
            placeholder="Input Password"
            label="Password"
            keyboardType="default"
            type="password"
          />
          <Checkbox message="By tapping 'I Agree', you accept these Terms & Conditions and agree to proceed" />
        </View>
        {/* Form Button */}
        <View style={styles.formButton}>
          <Button onPress={handleSubmit} loading={loading}>
            <Text style={styles.buttonText}>Register</Text>
          </Button>
        </View>
      </View>

      {/* Optional */}
      <View style={styles.optionalContainer}>
        {/* Optional title */}
        <View style={styles.optionalTitleContainer}>
          <ThemedText style={styles.optionalTitle}>Or Continue With</ThemedText>
        </View>

        {/* Optional redirect login */}
        <View style={styles.buttonContainer}>
          <Button
            onPress={handleRedirectGoogle}
            style={styles.button}
            icon={<AntDesign name="google" color={"white"} size={20} />}
          >
            <Text style={styles.buttonText}>Google</Text>
          </Button>
          <Button
            onPress={handleRedirectApple}
            style={styles.button}
            icon={<AntDesign name="apple1" color={"white"} size={20} />}
          >
            <Text style={styles.buttonText}>Apple</Text>
          </Button>
        </View>

        {/* Optional for register */}
        <View style={styles.optionalRegisterContainer}>
          <ThemedText style={styles.optionalTitle}>
            Already have an account?{" "}
            <Link
              href={"/(auth)/(login)"}
              style={[
                styles.link,
                {
                  color:
                    theme === "dark"
                      ? Colors.dark.textLink
                      : Colors.light.textLink,
                },
              ]}
            >
              Login
            </Link>
          </ThemedText>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContent: {
    display: "flex",
    justifyContent: "space-evenly",
    flexGrow: 1,
    padding: 15,
  },
  titleContainer: {
    marginTop: 5,
    marginBottom: 5,
    height: 100,
    width: "90%",
    display: "flex",
    justifyContent: "center",
  },
  title: {
    textAlign: "left",
    fontSize: 40,
    paddingTop: 12,
  },
  formContainer: {
    marginTop: 5,
    marginBottom: 5,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: 5,
  },
  formButton: {
    marginTop: 10,
  },

  link: {
    color: "green",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: 16,
  },
  right: {
    textAlign: "right",
    marginTop: 10,
    marginBottom: 10,
  },

  optionalContainer: {
    display: "flex",
    flexDirection: "column",
  },
  optionalRegisterContainer: {
    marginTop: 10,
  },
  optionalTitleContainer: {
    marginBottom: 20,
  },
  optionalTitle: {
    textAlign: "center",
    fontSize: 16,
  },

  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
  button: {
    width: "50%",
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
});

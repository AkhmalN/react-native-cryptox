import Button from "@/components/Button";
import FormInput from "@/components/TextInput";
import { ThemedText } from "@/components/ThemedText";
import { useRouter } from "expo-router";
import { useState } from "react";
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";

export default function LoginScreen() {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);

  function handleSubmit() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.push("/(auth)/(login)");
    }, 3000);
  }

  return (
    // Container
    <SafeAreaView style={styles.container}>
      {/* Title */}
      <View style={styles.titleContainer}>
        <ThemedText type="title" style={styles.title}>
          Reset Your Password!
        </ThemedText>
      </View>

      {/* Form */}
      <View style={styles.formContainer}>
        {/* Form input */}
        <View style={styles.form}>
          <FormInput
            placeholder="Input your new password"
            label="New Password"
            keyboardType="default"
            type="password"
          />
          <FormInput
            placeholder="Input your new password"
            label="Repeat Password"
            keyboardType="default"
            type="password"
          />
        </View>

        {/* Form Button */}
        <View style={styles.formButton}>
          <Button onPress={handleSubmit} loading={loading}>
            <Text style={styles.buttonText}>Reset</Text>
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    marginTop: StatusBar.currentHeight,
    justifyContent: "space-evenly",
    height: "100%",
    padding: 15,
  },
  titleContainer: {
    marginTop: 5,
    marginBottom: 5,
    height: 100,
    width: "70%",
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
  buttonText: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
});

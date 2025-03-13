import { Stack } from "expo-router";

export default function ScreenLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="notify"
        options={{ headerShown: true, headerTitle: "Notification" }}
      />
    </Stack>
  );
}

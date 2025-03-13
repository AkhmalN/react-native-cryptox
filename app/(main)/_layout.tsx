import { Tabs } from "expo-router";
import React from "react";
import { Platform, StyleSheet } from "react-native";

import { HapticTab } from "@/components/HapticTab";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { useColorScheme } from "@/hooks/useColorScheme";
import TabBar from "@/components/TabBar";
import HomeHeader from "@/components/HomeHeader";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      tabBar={(props) => <TabBar {...props} />}
      screenOptions={{
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            position: "absolute",
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "Home",
          headerShown: true,
          header: () => <HomeHeader />,
        }}
      />
      <Tabs.Screen
        name="market"
        options={{
          tabBarLabel: "Market",
          headerShown: true,
          headerTitleAlign: "center",
        }}
      />
      <Tabs.Screen
        name="scan"
        options={{
          headerShown: true,
          headerTitleAlign: "center",
        }}
      />
      <Tabs.Screen
        name="exchange"
        options={{
          tabBarLabel: "Exchange",
          headerShown: true,
          headerTitleAlign: "center",
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: "Profile",
          headerShown: true,
          headerTitleAlign: "center",
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  customIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    height: 60,
    backgroundColor: "green",
  },
});

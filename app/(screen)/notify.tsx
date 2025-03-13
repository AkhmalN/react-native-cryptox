import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import NotificationList from "@/components/NotificationList";
import { notifications } from "@/assets/data";
import { TNotification } from "@/schema/coin";

const NotifyScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={notifications}
        renderItem={({ item }) => <NotificationList item={item} />}
      />
    </View>
  );
};

export default NotifyScreen;

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
});

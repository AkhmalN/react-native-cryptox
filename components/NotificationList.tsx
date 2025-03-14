import { Image, StyleSheet, Text, useColorScheme, View } from "react-native";
import React from "react";
import { TNotification } from "@/schema/coin";
import { Colors } from "@/constants/Colors";
import { ThemedText } from "./ThemedText";

type TNotificationListProps = {
  item: TNotification;
};

const NotificationList: React.FC<TNotificationListProps> = ({ item }) => {
  const theme = useColorScheme();
  return (
    <View
      style={[
        styles.notificationContainer,
        {
          backgroundColor:
            theme === "dark" ? Colors.dark.background : Colors.light.background,
        },
      ]}
      key={item.id}
    >
      <View style={styles.notificationCard}>
        <View style={styles.notificationHeader}>
          <View style={styles.iconWrapper}>
            <Image
              style={styles.iconImage}
              source={require("../assets/images/icon.png")}
            />
          </View>
          <View style={styles.headerTextWrapper}>
            <ThemedText style={styles.headerText}>{item.headerText}</ThemedText>
          </View>
        </View>
        <View style={styles.notificationBody}>
          <ThemedText style={styles.notificationText}>
            {item.bodyText}
          </ThemedText>
        </View>
        <View style={styles.notificationFooter}>
          <ThemedText style={styles.footerText}>{item.date}</ThemedText>
        </View>
      </View>
    </View>
  );
};

export default NotificationList;

const styles = StyleSheet.create({
  notificationContainer: {
    padding: 15,
    borderWidth: 0.5,
    borderColor: "grey",
    borderRadius: 15,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
    width: "100%",
    marginTop: 3,
    marginBottom: 3,
  },
  notificationCard: {
    flexDirection: "column",
    gap: 2,
  },
  notificationHeader: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
  iconWrapper: {
    width: 30,
    height: 30,
    marginRight: 5,
  },
  iconImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 50,
  },
  headerTextWrapper: {
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontSize: 13,
    fontWeight: "600",
    fontFamily: "PoppinsBold",
    marginTop: 5,
  },
  notificationBody: {
    marginTop: 5,
    width: "100%",
  },
  notificationText: {
    fontFamily: "PoppinsRegular",
    fontWeight: "400",
    color: "grey",
    fontSize: 14,
  },
  notificationFooter: {
    width: "100%",
    display: "flex",
  },
  footerText: {
    fontSize: 12,
    color: "grey",
    textAlign: "right",
  },
});

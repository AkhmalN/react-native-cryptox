import { View, Text, StyleSheet, useColorScheme } from "react-native";
import React from "react";
import {
  ArrowUp01Icon,
  ArrowUpCircle,
  BitcoinIcon,
  ChevronUp,
  Home,
  Minus,
  MoveUpIcon,
  Plus,
} from "lucide-react-native";
import { Colors } from "@/constants/Colors";
import { ThemedText } from "./ThemedText";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type TListingProps = {
  name: string;
  initialName: string;
  value: number;
  rate: "Up" | "Down";
  valueRate: number;
};

const TrendingList: React.FC<TListingProps> = ({
  name,
  initialName,
  value,
  rate,
  valueRate,
}) => {
  const theme = useColorScheme();

  return (
    <View
      style={[
        styles.listingContainer,
        {
          backgroundColor:
            theme === "dark" ? Colors.dark.card : Colors.light.card,
        },
      ]}
    >
      <View style={styles.coinNameDetail}>
        <View
          style={[
            styles.coinIconContainer,
            { backgroundColor: name === "Bitcoin" ? "orange" : "purple" },
          ]}
        >
          {name === "Bitcoin" ? (
            <BitcoinIcon color={"white"} />
          ) : (
            <MaterialCommunityIcons name="ethereum" color={"white"} size={20} />
          )}
        </View>
        <View style={styles.coinTextContainer}>
          <ThemedText style={styles.coinName}>{name}</ThemedText>
          <ThemedText style={styles.coinInitial}>{initialName}</ThemedText>
        </View>
      </View>
      <View style={styles.coinNumberDetail}>
        <View style={styles.coinValueContainer}>
          <ThemedText style={styles.coinValue}>${value}</ThemedText>
        </View>
        <View style={styles.coinRateContainer}>
          {rate === "Up" ? (
            <Plus color={"green"} size={13} style={{ marginBottom: 3 }} />
          ) : (
            <Minus color={"red"} size={13} style={{ marginBottom: 3 }} />
          )}

          <ThemedText
            style={[
              styles.coinRateText,
              { color: rate === "Up" ? "green" : "red" },
            ]}
          >
            {" "}
            ${valueRate}
          </ThemedText>
        </View>
      </View>
    </View>
  );
};

export default TrendingList;

const styles = StyleSheet.create({
  listingContainer: {
    padding: 10,
    flexDirection: "row",
    width: "auto",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
    borderRadius: 15,
    marginTop: 5,
    marginBottom: 5,
  },
  coinNameDetail: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  coinNumberDetail: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 5,
  },
  coinIconContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 35,
    height: 35,
    backgroundColor: "orange",
    borderRadius: 20,
  },
  coinTextContainer: {
    margin: 10,
  },
  coinName: {
    fontWeight: "bold",
    fontSize: 17,
  },
  coinInitial: {
    color: "grey",
    fontSize: 13,
  },
  coinValueContainer: {
    alignItems: "center",
  },
  coinValue: {
    fontWeight: "bold",
  },
  coinRateContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  coinRateText: {
    fontSize: 13,
    color: "green",
  },
});

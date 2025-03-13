import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useRef } from "react";
import { StyleSheet, Text, useColorScheme, View } from "react-native";
import { LineChart } from "react-native-gifted-charts";
import { ThemedText } from "./ThemedText";
import { Colors } from "@/constants/Colors";
import { lineData } from "@/assets/data";

type TCoinCardType = {
  icon?: "Bitcoin" | "Ethereum";
  initialName?: string;
  value: number;
  percentage: number;
  ratio: "up" | "down";
};

const CoinCard: React.FC<TCoinCardType> = ({
  icon,
  value,
  percentage,
  ratio,
  initialName,
}) => {
  const lineChartRef = useRef<typeof LineChart>(null);
  const theme = useColorScheme();

  let iconRender = null;
  let bgIcon: string = "orange";
  switch (icon) {
    case "Bitcoin":
      iconRender = <FontAwesome name="bitcoin" color="white" size={20} />;
      bgIcon = "orange";
      break;
    case "Ethereum":
      iconRender = (
        <MaterialCommunityIcons name="ethereum" color="white" size={20} />
      );
      bgIcon = "purple";
      break;
    default:
      iconRender = null;
      break;
  }
  return (
    <View
      style={[
        styles.cardContainer,
        {
          backgroundColor:
            theme === "dark" ? Colors.dark.card : Colors.light.card,
        },
      ]}
    >
      <View style={styles.titleContainer}>
        <View style={[styles.coinIcon, { backgroundColor: bgIcon }]}>
          {iconRender}
        </View>
        <View>
          <Text
            style={[
              styles.coinName,
              { color: theme === "dark" ? "white" : Colors.light.text },
            ]}
          >
            {icon}
          </Text>
          <View style={styles.coinInitialContainer}>
            <Text style={styles.coinInitial}>{initialName}</Text>
          </View>
        </View>
      </View>

      <View style={styles.chartContainer}>
        <LineChart
          scrollRef={lineChartRef}
          isAnimated
          thickness={3}
          color={ratio === "up" ? "#508D4E" : "red"}
          maxValue={100}
          animateOnDataChange
          animationDuration={1000}
          onDataChangeAnimationDuration={300}
          areaChart
          hideYAxisText
          data={lineData}
          hideDataPoints
          hideAxesAndRules
          startFillColor={"#D6EFD8"}
          endFillColor={"#80AF81"}
          startOpacity={0.4}
          endOpacity={0.1}
          spacing={10}
          initialSpacing={1}
          yAxisColor="lightgray"
          xAxisColor="lightgray"
          height={80}
        />
      </View>
      <View style={styles.coinInfoContainer}>
        <ThemedText
          style={[
            styles.coinValue,
            { color: theme === "dark" ? "white" : Colors.light.text },
          ]}
        >
          ${value}
        </ThemedText>
        <ThemedText
          style={[styles.coinRate, { color: ratio === "up" ? "green" : "red" }]}
        >
          {ratio === "up" ? "+" : "-"}
          {percentage}%
        </ThemedText>
      </View>
    </View>
  );
};

export default CoinCard;

const styles = StyleSheet.create({
  cardContainer: {
    width: "47%",
    height: "90%",
    borderRadius: 15,
    padding: 15,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    gap: 10,
  },
  coinIcon: {
    backgroundColor: "orange",
    width: 30,
    height: 30,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
  },
  coinName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  coinInitialContainer: {
    borderRadius: 20,
  },
  coinInitial: {
    fontSize: 12,
    fontWeight: "600",
    color: "gray",
  },
  chartContainer: {
    marginVertical: 1,
  },
  coinInfoContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  coinValue: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  coinRate: {
    fontSize: 16,
    fontWeight: "600",
    color: "#28a745",
  },
});

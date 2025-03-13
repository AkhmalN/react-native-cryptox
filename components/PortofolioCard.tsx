import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Entypo, FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";

type TPortofolioCardProps = {
  label: string;
  value: number;
  percentageUp?: number;
  percentageDown?: number;
};

const PortofolioCard: React.FC<TPortofolioCardProps> = ({
  label,
  value,
  percentageDown,
  percentageUp,
}) => {
  return (
    <View
      style={[styles.cardContainer, { backgroundColor: Colors.general.card }]}
    >
      <View style={styles.cardTitle}>
        <Text
          style={[
            styles.text,
            { color: "#F1F1F1", marginLeft: 5, fontFamily: "PoppinsRegular" },
          ]}
        >
          {label}
        </Text>
      </View>
      <View style={styles.cardContentContainer}>
        {/* value */}
        <View style={styles.cardValueContainer}>
          {/* value Icon */}
          <View style={styles.valueIcon}>
            <MaterialIcons size={28} name="attach-money" color={"white"} />
          </View>
          {/* Value number */}
          <View style={styles.valueNumber}>
            <Text style={[styles.text, styles.valueText]}> {value}.00</Text>
          </View>
        </View>
        {/* percentage */}
        <View style={styles.percentageContainer}>
          {/* percentage number */}
          <View style={styles.percentageNumber}>
            <View style={styles.percentageDetails}>
              {percentageUp ? (
                <FontAwesome
                  name="sort-up"
                  size={17}
                  style={{ marginTop: 10, marginRight: 3 }}
                  color={"white"}
                />
              ) : (
                <FontAwesome
                  name="sort-down"
                  size={17}
                  style={{ marginTop: 10, marginRight: 3 }}
                  color={"white"}
                />
              )}
              <Text style={styles.text}>
                {percentageUp ? "+" : "-"} {percentageUp || percentageDown} %
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PortofolioCard;

const styles = StyleSheet.create({
  cardContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    height: 120,
    padding: 15,
    borderRadius: 15,
  },
  cardTitle: {
    marginBottom: 10,
  },

  cardContentContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  cardValueContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  valueIcon: {},
  valueNumber: {},
  valueText: {
    fontSize: 26,
    marginLeft: -8,
    fontWeight: "bold",
  },
  text: {
    color: "#FFFFFF",
  },
  percentageContainer: {},
  percentageNumber: {},
  percentageDetails: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
});

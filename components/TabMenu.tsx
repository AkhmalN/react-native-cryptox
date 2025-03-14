import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  useColorScheme,
} from "react-native";
import React from "react";
import { IMenu } from "@/schema/global";
import { useNavigation } from "@react-navigation/native";
import { icons } from "lucide-react-native";
import { Colors } from "@/constants/Colors";
import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText";

interface TabMenuProps {
  menu: IMenu[];
}

const TabMenu: React.FC<TabMenuProps> = ({ menu }) => {
  const navigation = useNavigation();
  const theme = useColorScheme();
  return (
    <ThemedView style={styles.menuContainer}>
      {menu.map((item, index) => {
        const LucideIcon = icons[item.icon];
        const iconColor =
          theme === "dark" ? Colors.light.background : Colors.dark.background;
        return (
          <TouchableOpacity
            activeOpacity={0.7}
            key={index}
            style={[
              styles.menuItem,
              { borderWidth: theme === "dark" ? 0 : 0.5, borderColor: "grey" },
            ]}
          >
            <LucideIcon style={[styles.icon]} color={iconColor} />
            <ThemedText style={styles.menuText}>{item.text}</ThemedText>
          </TouchableOpacity>
        );
      })}
    </ThemedView>
  );
};

export default TabMenu;

const styles = StyleSheet.create({
  menuContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 10,
  },
  menuItem: {
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
    width: "23%",
  },
  icon: {
    fontSize: 24,
    marginBottom: 5,
    marginTop: 5,
  },
  menuText: {
    fontSize: 12,
    fontFamily: "PoppinsRegular",
  },
});

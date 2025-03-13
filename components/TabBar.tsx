import React from "react";
import { View, StyleSheet, useColorScheme } from "react-native";
import { useLinkBuilder, useTheme } from "@react-navigation/native";
import { Text, PlatformPressable } from "@react-navigation/elements";
import {
  Entypo,
  Feather,
  FontAwesome,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { HomeIcon, StoreIcon, UserRoundIcon } from "lucide-react-native";

type TabNames = "index" | "market" | "scan" | "exchange" | "profile";

const TabBar = ({
  state,
  descriptors,
  navigation,
}: {
  state: any;
  descriptors: any;
  navigation: any;
}) => {
  const { colors } = useTheme();
  const { buildHref } = useLinkBuilder();
  const theme = useColorScheme();

  const ICONS: Record<TabNames, (props: any) => JSX.Element> = {
    index: (props) => <HomeIcon size={22} {...props} />,
    market: (props) => <StoreIcon size={22} {...props} />,
    scan: (props) => <Ionicons size={46} name="scan-circle-sharp" {...props} />,
    exchange: (props) => (
      <MaterialIcons size={22} name="currency-exchange" {...props} />
    ),
    profile: (props) => <UserRoundIcon size={22} name="user-o" {...props} />,
  };

  return (
    <View style={styles.tabBar}>
      {state.routes.map(
        (
          route: {
            key: string | number;
            name: string;
            params: object | undefined;
          },
          index: any
        ) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          if (["_sitemap", "+not_found"].includes(route.name)) return null;
          const isFocused = state.index === index;
          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };
          return (
            <PlatformPressable
              key={route.key}
              href={buildHref(route.name, route.params)}
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarButtonTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              pressOpacity={0.1}
              pressColor={
                theme === "dark"
                  ? Colors.dark.background
                  : Colors.light.background
              }
              style={[
                styles.tabBarItem,
                {
                  backgroundColor:
                    theme === "dark" ? Colors.dark.bar : Colors.light.bar,
                },
              ]}
            >
              {ICONS[route.name as TabNames]({
                color: isFocused
                  ? Colors.general.tabIconSelected
                  : Colors.general.tabIconDefault,
              })}
              {label !== "scan" && (
                <Text
                  style={[
                    styles.tabLabel,
                    {
                      fontFamily: isFocused ? "PoppinsBold" : "PoppinsRegular",
                      color: isFocused
                        ? Colors.general.tabIconSelected
                        : Colors.general.tabIconDefault,
                    },
                  ]}
                >
                  {label}
                </Text>
              )}
            </PlatformPressable>
          );
        }
      )}
    </View>
  );
};

export default TabBar;

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderTopWidth: 0.15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 10,
  },

  tabBarItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 8,
  },

  tabLabel: {
    fontSize: 12,
    marginTop: 4,
  },
});

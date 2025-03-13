import { Feather, Octicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Platform,
  Image,
  Pressable,
  useColorScheme,
} from "react-native";
import { ThemedText } from "./ThemedText";

const HomeHeader = () => {
  const router = useRouter();
  const theme = useColorScheme();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContent}>
        {/* Profile Section */}
        <View style={styles.profileSection}>
          <View style={styles.profileImage}>
            <Image
              source={{
                uri: "https://feb.ut.ac.id/wp-content/uploads/2017/10/user9.jpg",
              }}
              style={styles.image}
            />
          </View>
          {/* Placeholder for Image */}
          <View style={styles.nameStatus}>
            <ThemedText style={styles.name}>John Doe</ThemedText>
            <ThemedText style={styles.status}>Online</ThemedText>
          </View>
        </View>

        {/* Icons Section (Search & Bell) */}
        <View style={styles.iconsSection}>
          <Pressable
            style={styles.icon}
            onPress={() => router.push("/(screen)/notify")}
          >
            <Octicons
              name="search"
              size={25}
              color={theme === "dark" ? "white" : "grey"}
            />
          </Pressable>
          <View style={styles.icon}>
            <Pressable
              style={styles.icon}
              onPress={() => router.push("/(screen)/notify")}
            >
              <Feather
                name="bell"
                size={25}
                color={theme === "dark" ? "white" : "grey"}
              />
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    marginTop: Platform.OS === "ios" ? 0 : 30,
  },
  headerContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  profileSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#ccc",
    marginRight: 10,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 20,
  },
  nameStatus: {
    justifyContent: "center",
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
    fontFamily: "PoppinsBold",
  },
  status: {
    fontSize: 12,
    color: "gray",
    fontFamily: "PoppinsRegular",
  },
  iconsSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    width: 40,
    height: 40,
    marginLeft: 10,
    borderRadius: 15,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

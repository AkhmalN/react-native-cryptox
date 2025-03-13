import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from "react-native";

export default function MarketScreen() {
  const theme = useColorScheme();
  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          backgroundColor:
            theme === "dark" ? Colors.dark.background : Colors.light.background,
        },
      ]}
    >
      <ThemedView>
        <ThemedText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ex
          minima cum odio sed dolorum fuga eum quo architecto voluptatem? Dolore
          natus quia adipisci iusto obcaecati ab corrupti? Mollitia molestiae
          hic cupiditate ducimus laudantium sunt iure exercitationem commodi rem
          cumque maxime recusandae doloribus voluptates dignissimos quo
          asperiores nemo deserunt itaque, nisi odio neque. Hic blanditiis
          quibusdam sed quos, ullam eaque quae! Possimus ea vitae exercitationem
          tenetur corrupti quod perferendis illum nostrum doloremque cum
          deserunt impedit distinctio voluptates, placeat odit. Officia, aliquid
          aliquam, necessitatibus quasi blanditiis harum incidunt libero
          provident temporibus repellendus vel, voluptatum architecto assumenda
          dolorem? Quae eveniet, ipsam ut dolores maiores porro eligendi
        </ThemedText>
      </ThemedView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  text: {
    fontSize: 25,
    fontWeight: "500",
  },
});

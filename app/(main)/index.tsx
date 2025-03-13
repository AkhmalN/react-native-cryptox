import CoinCard from "@/components/CoinCard";
import TrendingListing from "@/components/TrendingListing";
import Loading from "@/components/Loading";
import PortofolioCard from "@/components/PortofolioCard";
import { ThemedText } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";
import { useEffect, useRef, useState } from "react";
import { ScrollView, StyleSheet, useColorScheme, View } from "react-native";

export default function HomeScreen() {
  const theme = useColorScheme();
  const [loading, setLoading] = useState<boolean>(true);
  const ref = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  });
  if (loading) {
    return <Loading />;
  }
  return (
    <ScrollView
      contentContainerStyle={styles.scrollViewContent}
      style={[
        {
          backgroundColor:
            theme === "dark" ? Colors.dark.background : Colors.light.background,
        },
      ]}
    >
      <PortofolioCard percentageUp={2.5} value={34010} label="My Portofolio" />
      <ThemedText type="subtitle" style={styles.subtitleText}>
        Portofolio
      </ThemedText>
      <View style={styles.chartContainer}>
        <CoinCard
          icon="Bitcoin"
          value={309.404}
          percentage={3.8}
          ratio="up"
          initialName="BTC"
        />
        <CoinCard
          icon="Ethereum"
          value={208.393}
          percentage={4.7}
          ratio="down"
          initialName="ETH"
        />
      </View>
      <ThemedText type="subtitle" style={styles.subtitleText}>
        Trending
      </ThemedText>
      <TrendingListing
        name="Bitcoin"
        initialName="BTC"
        value={198678}
        rate="Up"
        valueRate={121}
      />
      <TrendingListing
        name="Ethereum"
        initialName="ETH"
        value={298789}
        rate="Down"
        valueRate={233}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContent: {
    display: "flex",
    flexGrow: 1,
    padding: 15,
  },
  text: {
    fontSize: 25,
    fontWeight: "500",
  },
  chartContainer: {
    marginTop: 15,
    display: "flex",
    flexDirection: "row",
    gap: 15,
  },
  subtitleText: {
    marginTop: 5,
    marginBottom: 5,
  },
});

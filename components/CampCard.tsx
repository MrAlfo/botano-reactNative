import * as React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { CampCardProps } from "./types";

export const CampCard: React.FC<CampCardProps> = ({ title, subtitle, imageUrl }) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardContent}>
        <View style={styles.headerContainer}>
          <Text style={styles.titleText}>{title}</Text>
          <Text style={styles.subtitleText}>{subtitle}</Text>
          <Image
            resizeMode="contain"
            source={{ uri: imageUrl }}
            style={styles.cardImage}
          />
        </View>
        <View style={styles.divider} />
        <View style={styles.discoveryButton}>
          <Text style={styles.discoveryText}>DISCOVERY NEW CAMP</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    display: "flex",
    minHeight: 440,
    width: "100%",
    maxWidth: 330,
    flexDirection: "column",
    alignItems: "center",
    fontFamily: "Inter, sans-serif",
    textAlign: "center",
  },
  cardContent: {
    borderRadius: 20,
    display: "flex",
    width: "100%",
    padding: 30,
    flexDirection: "column",
    alignItems: "center",
  },
  headerContainer: {
    display: "flex",
    width: 256,
    maxWidth: "100%",
    flexDirection: "column",
    alignItems: "center",
  },
  titleText: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
  },
  subtitleText: {
    color: "#0A0A14",
    fontSize: 24,
    fontWeight: "700",
    marginTop: 15,
  },
  cardImage: {
    position: "relative",
    display: "flex",
    marginTop: 15,
    width: "100%",
    aspectRatio: 1.6,
  },
  divider: {
    display: "flex",
    minHeight: 0,
    marginTop: 30,
    maxWidth: "100%",
  },
  discoveryButton: {
    alignSelf: "stretch",
    borderRadius: 16,
    marginTop: 30,
    minHeight: 50,
    width: 260,
    maxWidth: "100%",
    padding: 17,
    gap: 15,
  },
  discoveryText: {
    fontSize: 14,
    color: "rgba(255, 255, 255, 1)",
    fontWeight: "400",
  },
});
</
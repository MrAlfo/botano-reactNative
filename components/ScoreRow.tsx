import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const scores = [
  { id: 1, icon: "tint", value: 12, color: "#D4F1F9" },
  { id: 2, icon: "wind", value: 10, color: "#CFEAF2" },
  { id: 3, icon: "fire", value: 5, color: "#FFD8B0" },
  { id: 4, icon: "seedling", value: 9, color: "#D8F3D5" },
];

export default function ScoreRow() {
  return (
    <View style={styles.container}>
      {scores.map((item) => (
        <View key={item.id} style={[styles.item, { backgroundColor: item.color }]}>
          <FontAwesome5 name={item.icon} size={18} color="#000" style={styles.icon} />
          <Text style={styles.text}>{item.value}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginHorizontal: 20,
    gap:10
  },
  item: {
    flexDirection: "row",
    gap:5,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    borderRadius: 20,
    minWidth: '20%',

  },
  icon: {
    marginRight: 5,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
});

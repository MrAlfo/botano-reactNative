import ProfileHeader from "@/components/ProfileHeader";
import {
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  Platform,
  Text
} from "react-native";
import profileData from "../../assets/data/profileData.json";
import BotanoCard from "@/components/BotanoCard";
import HexagonGrid from "@/components/HexagonGrid";
import React, { useState } from "react";


export default function HomeScreen() {

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      {/* Header */}
      <ProfileHeader
        name={profileData.name}
        imageUri={profileData.imageUri ?? ""}
        scores={profileData.scores}
      />
      {/* Scrollable Content */}

      <BotanoCard />
      <HexagonGrid />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: "#fff",
    paddingBottom: 120 
  },
});

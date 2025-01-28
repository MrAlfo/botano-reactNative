import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const BotanoCard = () => {
  const router = useRouter();

  return (
    <View style={styles.card}>
      {/* Sol Tarafta İkon ve Başlık */}
      <View style={styles.header}>
        <Image
          source={require("../assets/images/avatar.png")} // Botano iconu
          style={styles.icon}
        />
        <Text style={styles.title}>Botano</Text>
      </View>

      <View style={styles.description}>
        {/* Açıklama Metni */}
        <Text style={styles.text}>
          You can complete the Altar Card to continue, and feel free to ask for
          my help.
        </Text>

        {/* Buton */}
        <TouchableOpacity onPress={() => router.push('/pages/help')} style={styles.button}>
          <MaterialCommunityIcons name="comment-processing-outline" size={28} color="#fff" />
          <Text style={styles.buttonText}>Do you want help?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  icon: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
  title: {
    fontSize: 18,
    fontFamily: "Poppins_Bold",
    color: "#323534",
  },
  text: {
    marginBottom: 10,
    fontFamily: "Poppins_Regular",
    fontSize: 16,
  },
  description: {
    padding: 20,
    backgroundColor: "#E1EFE3",
    borderRadius: 10,
    borderStartStartRadius: 0,
    fontSize: 16,
    color: "#E1EFE3",
    marginBottom: 15,
    fontFamily: "Poppins_Regular",
  },
  button: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    alignContent: 'center',
    backgroundColor: "#38635A",
    borderRadius: 100,
    paddingVertical: 10,
    alignItems: "flex-start",
    maxWidth: '75%',
    paddingLeft: 20,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontFamily: "Poppins_Bold",
    fontSize: 16,
  },
});

export default BotanoCard;

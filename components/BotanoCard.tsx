import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const BotanoCard = () => {
  const navigation = useNavigation<any>();
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
        <TouchableOpacity onPress={() => navigation.navigate('explore')} style={styles.button}>
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
    width: 40,
    height: 40,
    marginRight: 10,
  },
  title: {
    fontSize: 18,
    fontFamily: "Poppins_Bold",
    color: "#2A9D8F",
  },
  text: {
    marginBottom: 10,
    fontFamily: "Poppins_Regular",
    fontSize: 16
  },
  description: {
    padding: 20,
    backgroundColor: "#DFF7E6",
    borderRadius: 10,
    borderStartStartRadius: 0,
    fontSize: 16,
    color: "#2A9D8F",
    marginBottom: 15,
    fontFamily: "Poppins_Regular",
  },
  button: {
    backgroundColor: "#2A9D8F",
    borderRadius: 5,
    paddingVertical: 10,
    alignItems: "flex-start",
    paddingLeft: 10,
    marginTop: 10
  },
  buttonText: {
    color: "#fff",
    fontFamily: "Poppins_Bold",
    fontSize: 16,
  },
});

export default BotanoCard;

import React from "react";
import { View, Text, StyleSheet, Image, ImageBackground, useWindowDimensions } from "react-native";

type ProfileHeaderProps = {
  name: string;
  imageUri: string;
  scores: any;
};


const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  name,
  imageUri,
  scores,
}) => {
  return (
    <View style={styles.container}>
      {/* Arka Plan Görseli */}
      <ImageBackground
        source={require("../assets/images/headerBackground.png")}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        {/* İçerik */}
        <View style={styles.content}>
          {/* Profil Resmi */}
          <View style={styles.imageWrapper}>
            <Image
              source={require("../assets/images/profile.png")}
              style={styles.profileImage}
            />
          </View>

          {/* Kullanıcı Adı */}
          <Text style={styles.profileName}>{name}</Text>

          {/* Puanlar */}
          <View style={styles.scores}>
            <View style={styles.scoreItem}>
              <Text style={styles.scoreNumber}>14</Text>
            </View>
            <View style={styles.scoreItem}>
              <Text style={styles.scoreNumber}>10</Text>
            </View>
            <View style={styles.scoreItem}>
              <Text style={styles.scoreNumber}>5</Text>
            </View>
            <View style={styles.scoreItem}>
              <Text style={styles.scoreNumber}>9</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 450,
  },
  backgroundImage: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  headerContainer: {
    position: "relative",
    width: "100%",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingBottom: 20,
  },
  backgroundShape: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: 200,
    backgroundColor: "#E8F5F9",
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    zIndex: -1,
  },
  content: {
    alignItems: "center",
    marginTop: 50,
  },
  imageWrapper: {
    backgroundColor: "#fff",
    borderRadius: 50,
    padding: 5,
  },
  profileImage: {
    width: 130,
    height: 130,
    borderRadius: 50,
  },
  profileName: {
    fontSize: 18,
    fontFamily: "Poppins-Bold",
    marginTop: 10,
  },
  scores: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginTop: 15,
  },
  scoreItem: {
    alignItems: "center",
  },
  scoreNumber: {
    fontSize: 14,
    fontWeight: "bold",
    fontFamily: "Poppins-Regular",
    marginTop: 5,
  },
});

export default ProfileHeader;

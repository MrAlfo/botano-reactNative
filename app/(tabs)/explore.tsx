import * as React from "react";
import { Text, StyleSheet, View, ScrollView } from "react-native";
import { Image } from "expo-image";
import { ExerciseCard } from "@/components/ExerciseCard";
import { ProductCard } from "@/components/ProductCard";
import { RelatedProduct } from "@/components/RelatedProduct";
import { PriceDisplay } from "@/components/PriceDisplay";


const KartModal = () => {
  return (
    <ScrollView style={styles.screenContainer}>
      <View style={styles.backButton}>
        <Image
          resizeMode="contain"
          source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/d50fc5ddaefa5508a73e510ad64fb8417e7d9e7c9eaa48e9eaf30b3bd7c6a6ca?placeholderIfAbsent=true&apiKey=7efa2bc6ca0748d89d049010d54aaee0' }}
          style={styles.backIcon}
        />
      </View>
      
      <View style={styles.mainContent}>
        <Image
          resizeMode="contain"
          source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/e01f919a-13da-4e19-9516-3487e084c232?placeholderIfAbsent=true&apiKey=7efa2bc6ca0748d89d049010d54aaee0' }}
          style={styles.mainImage}
        />
        
        <View style={styles.contentContainer}>
          <ExerciseCard
            title="Running Exercise"
            description="Slow down and feel your breath. Count each step as your feet touch the ground, tuning into your body's rhythm. Let yourself flow with each stride."
            iconUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/4e268c587e459aed95e4e94850c283a01e776427754cabb8b98f4d884ef3e69a?placeholderIfAbsent=true&apiKey=7efa2bc6ca0748d89d049010d54aaee0"
          />
          
          <Image
            source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/e58faa22cce2424a22821644f3a7ae4710ea7bff70c4962ca480599f473b1580?placeholderIfAbsent=true&apiKey=7efa2bc6ca0748d89d049010d54aaee0' }}
            style={styles.dividerImage}
          />
          
          <ProductCard
            title="Best Practice"
            description="Select or customize your avatar and enter your social media account information to personalize your profile."
            imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/20cd5df84b22865bd8322602117a14f2994f85cd6149642e3100852e527c2896?placeholderIfAbsent=true&apiKey=7efa2bc6ca0748d89d049010d54aaee0"
          />
          
          <RelatedProduct
            title="Releated Product"
            description="Select or customize your avatar and enter your social media account information to personalize your profile."
            images={['https://cdn.builder.io/api/v1/image/assets/TEMP/a0f3dabfa93ecdb1ad1ecfa5a3707b98e904a4f8f83e61b4e41f4f7836782ee2?placeholderIfAbsent=true&apiKey=7efa2bc6ca0748d89d049010d54aaee0', 'https://cdn.builder.io/api/v1/image/assets/TEMP/00a158dfd32bdb68f526b60eb767973e4037a8c27231b1bf40233e59293b1f9f?placeholderIfAbsent=true&apiKey=7efa2bc6ca0748d89d049010d54aaee0']}
          />
          
          <PriceDisplay
            title="Advanced Juice Reboot by JRINK by Purée Regular price"
            price="$150"
            subtitle="Sustainably Wild Harvested Chaga Mushroom"
          />
          <View style={styles.actionButton}>
            <Text style={styles.actionButtonText}>Ok, I'm in!</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    backgroundColor:'#38635A',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '100%',
    paddingTop: 21,
    paddingBottom: 21,
  },
  backButton: {
    borderRadius: 32,
    borderColor: '#FFFFFF',
    borderWidth: 2,
    marginRight: 20,
    minHeight: 36,
    padding: 11,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backIcon: {
    width: 14,
    aspectRatio: 1,
  },
  mainContent: {
    marginTop: 15,
    width: '100%',
    paddingLeft: 20,
  },
  mainImage: {
    width: '100%',
    aspectRatio: 0.75,
  },
  contentContainer: {
    marginTop: 20,
    minHeight: 852,
    width: '100%',
    paddingEnd: 20
  },
  dividerImage: {
    marginTop: 40,
    minHeight: 40,
    width: 133,
    aspectRatio: 3.32,
  },
  actionButton: {
    borderRadius: 40,
    marginTop: 29,
    padding: 16,
  },
  actionButtonText: {
    fontSize: 20,
    color: '#38635A',
    fontFamily: 'ITC Avant Garde Gothic',
    fontWeight: '600',
    textAlign: 'center',
  },
  text: {
    fontFamily: "CustomFont-Regular",
  }
});

export default KartModal;

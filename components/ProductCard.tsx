import { ProductCardProps } from '@/constants/types';
import * as React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export const ProductCard: React.FC<ProductCardProps> = ({ title, description, imageUrl }) => {
  return (
    <View style={styles.productContainer}>
      <View style={styles.textContent}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          resizeMode="contain"
          source={{ uri: imageUrl }}
          style={styles.image}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  productContainer: {
    width: '100%',
    flexDirection: 'column',
    marginTop: 40
  },
  textContent: {
    flexDirection: 'column',
  },
  title: {
    fontSize: 26,
    color: '#FFFFFF',
    fontFamily: 'Poppins_Regular',
    fontWeight: '500',
  },
  description: {
    fontSize: 14,
    fontFamily: 'Poppins_Regular',
    lineHeight: 23,
    color: '#FFFFFF',
    marginTop: 5,
  },
  imageContainer: {
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    aspectRatio: 1.75,
  },
});
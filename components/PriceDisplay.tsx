import { PriceDisplayProps } from '@/constants/types';
import * as React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

export const PriceDisplay: React.FC<PriceDisplayProps> = ({ title, price, subtitle, images }) => {
  return (
    <ScrollView horizontal={true} // Yatay kaydırmayı etkinleştir
      showsHorizontalScrollIndicator={false} style={styles.priceContainer}>
      <View style={styles.imagesContainer}>
        {images.map((imageUrl: any, index: any) => (
          <View key={index} style={styles.bothContainer}>
            <Image
              key={index}
              resizeMode="contain"
              source={{ uri: imageUrl }}
              style={styles.image}
            />
            <Text style={styles.title}>{title}</Text>
            <View style={styles.priceContent}>
              <Text style={styles.price}>{price}</Text>
              <View style={styles.underline} />
            </View>
            <Text style={styles.subtitle}>{subtitle}</Text>
            </View>


        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  priceContainer: {
    display: 'flex',
    marginTop: 11,
    gap: 13,
  },
  title: {
    fontSize: 12,
    color: '#FFFFFF',
    fontFamily: 'Poppins-Regular',
    fontWeight: '500',
    lineHeight: 17,
  },
  priceContent: {
    marginTop: 6,
    flexDirection: 'column',
  },
  price: {
    fontSize: 18,
    fontFamily: 'Poppins-Regular',
    color: '#FFFFFF',
    fontWeight: '600',
  },
  underline: {
    borderColor: '#FFFFFF',
    borderStyle: 'solid',
    borderWidth: 3,
    marginTop: 4,
    width: 39,
    height: 3,
  },
  subtitle: {
    fontSize: 12,
    color: '#FFFFFF',
    fontFamily: 'Poppins-Regular',
    fontWeight: '500',
    lineHeight: 17,
  },
  imagesContainer: {
    marginTop: 20,
    flexDirection: 'row',
    gap: 20,
    overflow: 'hidden',
  },
  image: {
    width: 196,
    aspectRatio: 1.28,
    flexShrink: 0,
  },
  bothContainer: {
    display: 'flex'
  }
});
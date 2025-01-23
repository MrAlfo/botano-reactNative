import { RelatedProductProps } from '@/constants/types';
import * as React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

export const RelatedProduct: React.FC<RelatedProductProps> = ({ title, description }) => {
  return (
    <ScrollView       horizontal={true} // Yatay kaydırmayı etkinleştir
        showsHorizontalScrollIndicator={false}  style={styles.relatedContainer}>
      <View style={styles.textContent}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  relatedContainer: {
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
});
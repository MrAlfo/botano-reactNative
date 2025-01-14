import { PriceDisplayProps } from '@/constants/types';
import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const PriceDisplay: React.FC<PriceDisplayProps> = ({ title, price, subtitle }) => {
  return (
    <View style={styles.priceContainer}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.priceContent}>
        <Text style={styles.price}>{price}</Text>
        <View style={styles.underline} />
      </View>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
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
});
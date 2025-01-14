import { ExerciseCardProps } from '@/constants/types';
import * as React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';


export const ExerciseCard: React.FC<ExerciseCardProps> = ({ title, description, iconUrl }) => {
  return (
    <View style={styles.exerciseContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <Image
          resizeMode="contain"
          source={{ uri: iconUrl }}
          style={styles.icon}
        />
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  exerciseContainer: {
    width: '100%',
    flexDirection: 'column',
  },
  headerContainer: {
    display: 'flex',
    width: '100%',
    gap: 0,
    justifyContent: 'space-between',
  },
  titleContainer: {
    width: 275,
  },
  title: {
    fontSize: 26,
    color: '#FFFFFF',
    fontFamily: 'Poppins-Regular',
    fontWeight: '500',
  },
  icon: {
    width: 23,
    aspectRatio: 0.88,
    flexShrink: 0,
  },
  descriptionContainer: {
    marginTop: 5,
  },
  description: {
    fontSize: 14,
    lineHeight: 23,
    color: '#FFFFFF',
    fontFamily: 'Poppins-Regular',
  },
});
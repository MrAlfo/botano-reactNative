import React from 'react';
import { View, StyleSheet } from 'react-native';
import Hexagon from './Hexagon';

const HexagonGrid = () => {
  const items = [
    { label: 'Products for you', color: '#A8E6CF' },
    { label: 'Power Profile', color: '#DCEDC1' },
    { label: 'Sensor', color: '#FFAAA5' },
    { label: 'Create Altar', color: '#D4A5A5' },
    { label: 'All Routines', color: '#FFC5A1' },
    { label: 'Discover Circle', color: '#FFD3B6' },
  ];

  return (
    <View style={styles.container}>
      {/* İlk Satır */}
      <View style={styles.row}>
        <Hexagon label={items[0].label} color={items[0].color} />
        <Hexagon label={items[1].label} color={items[1].color} />
      </View>

      {/* Ortadaki Profil ve Altıgenler */}
      <View style={styles.row}>
        <Hexagon label={items[2].label} color={items[2].color} />
        <View style={styles.profileHexagon}>
          <Hexagon
            label=""
            color="transparent"
            imageSource={require('../assets/images/profile.png')}
          />
        </View>
        <Hexagon label={items[3].label} color={items[3].color} />
      </View>

      {/* Son Satır */}
      <View style={styles.row}>
        <Hexagon label={items[4].label} color={items[4].color} />
        <Hexagon label={items[5].label} color={items[5].color} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  profileHexagon: {
    marginHorizontal: 5,
    width: 100,
    height: 100,
  },
});

export default HexagonGrid;
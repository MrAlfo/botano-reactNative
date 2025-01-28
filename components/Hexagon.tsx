import { FontAwesome6 } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Svg, { Polygon, ClipPath, Defs, Image as SvgImage } from 'react-native-svg';

// Props için tür tanımı
type HexagonProps = {
  label?: string;
  color: string;
  imageSource?: any; // Opsiyonel: Görsel için kaynak
};

const Hexagon: React.FC<HexagonProps> = ({ label, color, imageSource }) => {
  return (
    <View style={styles.container}>
      <Svg height="100" width="100">
        <Defs>
          {/* Altıgen için ClipPath */}
          <ClipPath id="clip">
            <Polygon points="50,0 100,25 100,75 50,100 0,75 0,25" />
          </ClipPath>
        </Defs>

        {/* Altıgen Arka Plan */}
        <Polygon points="50,0 100,25 100,75 50,100 0,75 0,25" fill={color} />

        {/* Görsel (Opsiyonel) */}
        {imageSource && (
          <SvgImage
            href={imageSource}
            width="100"
            height="100"
            preserveAspectRatio="xMidYMid slice"
            clipPath="url(#clip)"
          />
        )}
      </Svg>

      {/* Altıgenin Ortasındaki Yazı */}
      {!imageSource && label && (
        <View style={styles.textWrapper}>
          <View style={styles.arrowContainer}><FontAwesome6 name="arrow-right" size={18} color="black" /></View>
          <Text style={styles.text}>{label}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textWrapper: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: "Poppins_Regular",
    width: '80%',
    height: '100%',
  },
  text: {
    fontSize: 12,
    fontFamily: "Poppins_Regular",
    color: '#000',
    textAlign: 'center',
    width: 60
  },
  arrowContainer: {
    backgroundColor: '#fff',
    borderRadius: 60,
    paddingVertical: 4,
    paddingHorizontal: 6,
    marginBottom: 5
  }
});

export default Hexagon;

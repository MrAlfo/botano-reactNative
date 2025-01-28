import { Tabs } from 'expo-router';
import React from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback, Image } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false, // Etiketleri manuel ekliyoruz
        tabBarStyle: styles.tabBar,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={[styles.tabItem, focused && styles.activeTab]}>
              <MaterialCommunityIcons name="mirror" size={24} color={focused ? '#FFFFFF' : '#2D625F'} />
              <Text style={[styles.tabText, focused && styles.activeTabText]}>MIRROR</Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          headerShown: false,
          tabBarButton: (props) => (
            <TouchableWithoutFeedback onPress={() => {}}>
              <View style={styles.tabItem}>
              <Image
                source={require('../../assets/images/icons/botano.png')} // Yerel bir resim dosyası
                style={[
                  styles.image,
                  { tintColor: props.onFocus ? '#2D625F' : '#FFFFFF' }, // Focus durumuna göre renk
                ]}
              />
                <Text style={styles.tabText}>ENGAGE</Text>
              </View>
            </TouchableWithoutFeedback>
          ),
        }}
      />
      <Tabs.Screen
        name="engage"
        options={{
          headerShown: false,
          tabBarButton: (props) => (
            <TouchableWithoutFeedback onPress={() => {}}>
              <View style={styles.tabItem}>
              <Image
                source={require('../../assets/images/icons/explore.png')} // Yerel bir resim dosyası
                style={[
                  styles.image,
                  { tintColor: props.onFocus ? '#2D625F' : '#FFFFFF'  }, // Focus durumuna göre renk
                ]}
              />
                <Text style={styles.tabText}>EXPLORE</Text>
              </View>
            </TouchableWithoutFeedback>
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    bottom: 2,
    left: 20,
    right: 20,
    height: 64,
    marginVertical: 10,
    marginHorizontal: 20,
    backgroundColor: 'rgba(108, 139, 123, 0.69)',
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 10,
    flexDirection: 'row', // Sekmeleri yatay hizala
    justifyContent: 'space-between', // Sekmeler arası eşit boşluk bırak
  },
  tabItem: {
    height: 50,
    width: 110,
    flexDirection: 'row', // İkon ve metni yatay hizala
    alignItems: 'center', // Dikey ortalama
    justifyContent: 'center', // Yatay ortalama
    borderRadius: 30,
    top: 6
  },
  activeTab: {
    backgroundColor: '#2D625F',
    top: 12
  },
  tabText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#ffffff',
    marginLeft: 5, // İkon ile metin arasına boşluk
  },
  activeTabText: {
    color: '#FFFFFF', // Aktif sekmenin metin rengi
  },
  image: {
    width: 24,
    height: 24
  }
});

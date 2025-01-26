import { Tabs } from 'expo-router';
import React from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

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
              <Ionicons name="eye" size={18} color={focused ? '#FFFFFF' : '#2D625F'} />
              <Text style={[styles.tabText, focused && styles.activeTabText]}>Mirror</Text>
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
                <Ionicons name="radio" size={18} color="#2D625F" />
                <Text style={styles.tabText}>Engage</Text>
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
                <Ionicons name="compass-outline" size={18} color="#2D625F" />
                <Text style={styles.tabText}>Explore</Text>
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
    height: 60,
    marginVertical: 10,
    marginHorizontal: 20,
    backgroundColor: 'rgba(159, 179, 172, 0.8)',
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
    height: 60,
    width: 110,
    flexDirection: 'row', // İkon ve metni yatay hizala
    alignItems: 'center', // Dikey ortalama
    justifyContent: 'center', // Yatay ortalama
    borderRadius: 30,
  },
  activeTab: {
    backgroundColor: '#2D625F',
    top: 10
  },
  tabText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#2D625F',
    marginLeft: 5, // İkon ile metin arasına boşluk
  },
  activeTabText: {
    color: '#FFFFFF', // Aktif sekmenin metin rengi
  },
});

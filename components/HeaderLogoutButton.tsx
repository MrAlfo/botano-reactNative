import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useAuth } from '@/hooks/AuthContext';
import { useRouter } from 'expo-router';

const HeaderLogoutButton = () => {
  const { logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout(); // AuthContext içindeki logout fonksiyonu
    router.replace('/pages/login'); // Login ekranına yönlendir
    console.log('test')
  };

  return (
    <TouchableOpacity onPress={handleLogout} style={styles.button}>
      <Ionicons name="log-out-outline" size={32} color="#b23b3b" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 9
  },
});

export default HeaderLogoutButton;

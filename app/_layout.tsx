import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { useRouter, Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Login durumu
  const [loading, setLoading] = useState(true); // Yükleniyor durumu
  const router = useRouter();

  const [fontsLoaded] = useFonts({
    Poppins_Light: require('../assets/fonts/Poppins-Light.ttf'),
    Poppins_Regular: require('../assets/fonts/Poppins-Regular.ttf'),
    Poppins_Bold: require('../assets/fonts/Poppins-Bold.ttf'),
  });

  useEffect(() => {
    const checkLoginStatus = async () => {
      // Login durumu kontrol ediliyor
      const userToken = null; // Örneğin: AsyncStorage.getItem('userToken');
      setIsLoggedIn(!!userToken);
      setLoading(false); // Yükleme tamamlandı
    };

    checkLoginStatus();
  }, []);

  useEffect(() => {
    if (fontsLoaded && !loading) {
      SplashScreen.hideAsync();
      // Login durumuna göre yönlendirme
      if (!isLoggedIn) {
        router.replace('/pages/login');
      } else {
        router.replace('/pages/login');
      }
    }
  }, [fontsLoaded, loading, isLoggedIn]);

  if (!fontsLoaded || loading) {
    // Splash screen gösteriliyor
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="login" options={{ title: 'Login', headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}

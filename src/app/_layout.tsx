import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

// Impede que a tela de splash seja ocultada antes de carregar os assets.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Stack screenOptions={{headerShown: true}}>
      <Stack.Screen name="signin" options={{ presentation: 'modal' }} />
      <Stack.Screen name="signup" options={{ presentation: 'modal' }} />
      <Stack.Screen name="localization" options={{ presentation: 'modal' }} />
    </Stack>
  );
}

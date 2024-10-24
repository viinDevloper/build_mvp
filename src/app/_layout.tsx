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
<<<<<<< HEAD
    <Stack screenOptions={{headerShown: false}}>
      <Stack.Screen name="signin" options={{ presentation: 'modal' }} />
      <Stack.Screen name="signup" options={{ presentation: 'modal' }} />
=======
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="signin" options={{ presentation: "modal" }} />
      <Stack.Screen name="signup" options={{ presentation: "modal" }} />
      <Stack.Screen name="onboarding" options={{ headerShown: true }} />
      <Stack.Screen name="welcome" options={{ headerShown: true }} />
      <Stack.Screen name="localization" options={{ headerShown: true }} />
      <Stack.Screen name="notifications" options={{ headerShown: true }} />
>>>>>>> ff70dbbd2b6b9bc49a00cc782aa4a85db4f5506f
    </Stack>
  );
}

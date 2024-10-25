import { View, Image, ScrollView, Text } from "react-native";
import { Button } from "../../components/button";
import { router } from "expo-router";

const Welcome = () => {
  return (
    <ScrollView className="bg-white">
      <View className="flex-1 h-screen justify-center items-center mx-4">
        {/* Logo Section */}
        <View className="flex flex-row items-center mb-72 justify-center">
          <Image
            source={require("../../assets/b2Y.jpg")}
            style={{ width: 250, height: 45 }}
          />
        </View>

        <View className="gap-6 w-full justify-center items-center">
          {/* Login Button */}
          <Button
            title="Login"
            onPress={() => {
              router.dismissAll();
              router.push("/(auth)/signIn");
            }}
          />

          {/* Criar Conta Button */}
          <Button
            variant="SECUNDARY"
            title="Criar conta"
            onPress={() => {
              router.dismissAll();
              router.push("/(auth)/signUp");
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Welcome;

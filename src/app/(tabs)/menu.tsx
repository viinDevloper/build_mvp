import { View, Image, Text, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { signOut } from "firebase/auth";
import { router } from "expo-router";
import { auth } from "../../firebase/config";
import { useState } from "react";

type Props = {};

const ProfileScreen = (props: Props) => {
  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("Desconectado com sucesso");
      router.push("/(auth)/signIn");
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
      console.log("Erro ao desconectar");
    }
  };

  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 bg-white">
        {/* Cabeçalho */}
        <View className="bg-[#FF6600] p-4 flex-row items-center">
          <Image
            source={{ uri: "https://via.placeholder.com/150" }}
            className="w-16 h-16 rounded-full"
          />
          <View className="ml-4">
            <Text className="text-white text-lg">Vinicius Moreira</Text>
            <Text className="text-white">Minha Conta</Text>
          </View>
          
        </View>
      </View>
      <Button title="Logout" onPress={handleLogout} />
    </SafeAreaView>
  );
};

export default ProfileScreen;

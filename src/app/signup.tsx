import React, { useState } from "react";
import { Link } from "expo-router";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "../components/button";
import { Input } from "../components/input";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import { router } from "expo-router";

<<<<<<< HEAD
export default function SignUp () {
=======
const SignUpScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [value, setValue] = useState("");

  const handleSignup = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log(`Usuário criado: ${user.email}`);
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      } else {
        console.error("Erro desconhecido", error);
      }
    }
  };
>>>>>>> fc4a1cb1aca723cf3da07d224099eed1e46eb422
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 px-6 justify-center items-center">
        <Text className="text-2xl font-bold mb-8">B2Y 2 You</Text>

        <View className="w-24 h-24 rounded-full mb-8 items-center justify-center">
          <Image
            source={require("../assets/Frame 17.png")}
            className="w-24 h-24"
          />
        </View>

        <View className="w-full space-y-4 mb-8">
          <Input placeholder="Nome" />

          <Input
            placeholder="Seu E-mail"
            value={email}
            onChangeText={setEmail}
          />

          <Input placeholder="Cpf/Cnpj" />

          <Input
            placeholder="Sua senha"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <Input placeholder="Confirme sua senha" />
        </View>
        <TouchableOpacity
          className="w-full bg-orange-500 rounded-lg p-4 items-center mb-4"
          onPress={handleSignup}
        >
          <Text className="text-white font-bold">Cadastrar</Text>
        </TouchableOpacity>
        <Text className="mb-2 text-[#c4c5c4]">Já tem uma conta?</Text>
        <Button
          variant="SECUNDARY"
          title="Ir para o login"
          className="w-80"
          onPress={() => {
            router.dismissAll();
            router.push("/signin");
          }}
        />
      </View>
    </SafeAreaView>
  );
};

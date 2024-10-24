import { Link } from "expo-router";
import { Text, View, TextInput, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "../components/button";
import { Input } from "../components/input";


const SignUpScreen = () => {
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
          <Input placeholder="Nome"/>

          <Input placeholder="Seu Telefone"/>

          <Input placeholder="Cpf/Cnpj"/>

          <Input placeholder="Sua senha"/>

          <Input placeholder="Confirme sua senha"/>
        </View>

        <Button title="Cadastrar"/>

        <Text className="mb-2">Já tem uma conta?</Text>
        <Link href="/signin">
          <Button title="Ir para o login"/>
        </Link>
      </View>
    </SafeAreaView>
  );
};

export default SignUpScreen;

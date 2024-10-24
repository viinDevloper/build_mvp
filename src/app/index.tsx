import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";

type Props = {};

export default function App (props: Props)  {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-2xl bg-[#FF6600] text-white p-5 rounded-[20px]">Engenharia Front end B2Y Business 2 You</Text>
      <Link href={"/onboarding"}>
        <Text className="text-2xl">Screen Onboarding</Text>
      </Link>

      <Link href={"/"}>
        <Text className="text-2xl">Screen login</Text>
      </Link>

      <Link href={"/(auth)signUp"}>
        <Text className="text-2xl">Screen Cadastro</Text>
      </Link>

      <Link href={"/(auth)welcome"}>
        <Text className="text-2xl">Screen Bem vindos</Text>
      </Link>

      <Link href={"/(tabs)"}>
        <Text className="text-2xl"> Screen Home</Text>
      </Link>
      <Link href={"/(tabs)localization"}>
        <Text className="text-2xl">Screen Localization</Text>
      </Link>

    </View>
  );
};



import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";

type Props = {};

const index = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text className="text-2xl bg-[#FF6600] text-white p-5 rounded-[20px]">Engenharia Front end B2Y Business 2 You</Text>
      <Link href={"/onboarding"}>
        <Text className="text-2xl">Screen Onboarding</Text>
      </Link>

      <Link href={"/signin"}>
        <Text className="text-2xl">Screen login</Text>
      </Link>

      <Link href={"/signup"}>
        <Text className="text-2xl">Screen Cadastro</Text>
      </Link>

      <Link href={"/welcome"}>
        <Text className="text-2xl">Screen Bem vindos</Text>
      </Link>

      <Link href={"/(tabs)"}>
        <Text className="text-2xl"> Screen Home</Text>
      </Link>
      <Link href={'localization'}>
        <Text className="text-2xl">Screen Localization</Text>
      </Link>

    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

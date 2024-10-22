import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Link } from "expo-router";

type Props = {};

const index = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text>Infra de Telas do Projeto</Text>
      <Link href={"/onboarding"}>
        <Text>Desenvolver Onboarding</Text>
      </Link>
      <Link href={"/signin"}>
        <Text>Desenvolver Tela de login</Text>
      </Link>
      <Link href={"/signup"}>
        <Text>Desenvolver Tela de Cadastro</Text>
      </Link>
      <Link href={"/welcome"}>
        <Text>Desenvolver Tela de Bem vindos</Text>
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

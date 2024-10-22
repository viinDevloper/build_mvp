import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { Feather, Ionicons } from "@expo/vector-icons";
import Constants from "expo-constants";
import { SafeAreaView } from "react-native-safe-area-context";

const StatusBarHeight = Constants.statusBarHeight;

type Props = {};

const HomeScreen = (props: Props) => {
  return (
    <View style={styles.container}>
      <SafeAreaView
        className="flex-1 max-w-[80%] items-center flex-row absolute top-0 justify-center"
        style={{ marginTop: StatusBarHeight }}
      >
        <View className="flex-row border border-slate-950 h-18 rounded-lg bg-transparent p-3">
          <TextInput
            placeholder="Buscar"
            className="flex-1 h-full bg-transparent"
          />
          <View className="h-18 w-[1.5px] bg-slate-950 rounded-lg mr-[13px]" />
         <Ionicons name="search-sharp" size={30} color="#020617"/>
        </View>
        <View className="mx-3">
        <Ionicons name="notifications-outline" size={30} color="black" />
        <View />
        </View>
      </SafeAreaView>

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

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

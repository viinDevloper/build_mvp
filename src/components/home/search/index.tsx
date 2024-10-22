import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";

export function Search() {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View className="flex-1 justify-center items-center">
      <StatusBar style="dark" />
      <SafeAreaView className="flex-1 max-w-[80%] flex-row items-center justify-center">
        <View className="flex-row items-center border border-slate-950 h-18 rounded-lg bg-transparent p-2">
          <TextInput
            placeholder={isFocused ? "" : "Buscar"}
            className="flex-1 h-full bg-transparent text-[15px]"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          <View className="h-18 w-[1.5px] bg-slate-950 mx-3 rounded-lg" />
          <Ionicons name="search-sharp" size={30} color="#020617" />
        </View>

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => console.log("Notificações clicadas!")}
          className="relative mx-3"
        >
          <Ionicons name="notifications-outline" size={36} color="black" />
          <View className="absolute top-0 right-0 w-5 h-5 bg-primary100 rounded-full items-center justify-center">
            <Text className="text-white text-xs">1</Text>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
}

import { Ionicons } from "@expo/vector-icons";
import Constants from "expo-constants";
import { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";

export function Search() {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View className="flex-1 justify-center items-center">
      <SafeAreaView className="flex-1 max-w-[80%] items-center flex-row justify-center">
        <View className="flex-row border border-slate-950 h-18 rounded-lg bg-transparent p-3">
          <TextInput
            placeholder={isFocused ? "" : "Buscar"}
            className="flex-1 h-full bg-transparent text-[15px] top-1"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          <View className="h-18 w-[1.5px] bg-slate-950 rounded-lg mr-[13px]" />
          <Ionicons name="search-sharp" size={30} color="#020617" />
        </View>

        <TouchableOpacity
          activeOpacity={0.1}
          onPress={() => console.log("Notificações clicadas!")}
        >
          <View className="mx-3">
            <Ionicons name="notifications-outline" size={36} color="black" />
            <View className="rounded-full bg-primary100 items-center w-5 h-5 justify-center absolute top-0 ml-[18px]">
              <Text className="text-white">1</Text>
            </View>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
}

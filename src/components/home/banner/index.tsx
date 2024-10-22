import { View, Pressable, Image, ScrollView } from "react-native";

export function Banner() {
  return (
    <View className="flex-1 mt-3">
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <Pressable key="1" onPress={() => console.log("clicou no banner 1")} className="mr-4">
          <Image source={require("../../../assets/banner.jpg")} className="w-80 h-40 rounded-xl"/>
        </Pressable>
        <Pressable key="2" onPress={() => console.log("clicou no banner 1")} className="mr-4">
          <Image source={require("../../../assets/banner.jpg")} className="w-80 h-40 rounded-xl"/>
        </Pressable>
        <Pressable key="3" onPress={() => console.log("clicou no banner 1")} className="mr-4">
          <Image source={require("../../../assets/banner.jpg")} className="w-80 h-40 rounded-xl"/>
        </Pressable>
      </ScrollView>
    </View>
  );
}

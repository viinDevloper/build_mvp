import { View, Text, Pressable, Image, ScrollView } from "react-native";

export default function Categories() {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
    <View className="flex-row gap-5">
      <Pressable
        className="flex flex-col items-center justify-center"
        onPress={() => console.log("Clicou")}
      >
        <Image
          source={require("../../../assets/banner.jpg")}
          className="w-20 h-20 rounded-xl"
        />
        <Text
          className="text-sm mt-2 w-20 text-center leading-4 text-black"
          numberOfLines={2}
        >
          name
        </Text>
      </Pressable>
      <Pressable
        className="flex flex-col items-center justify-center"
        onPress={() => console.log("Clicou")}
      >
        <Image
          source={require("../../../assets/banner.jpg")}
          className="w-20 h-20 rounded-xl"
        />
        <Text
          className="text-sm mt-2 w-20 text-center leading-4 text-black"
          numberOfLines={2}
        >
          name
        </Text>
      </Pressable>
      <Pressable
        className="flex flex-col items-center justify-center"
        onPress={() => console.log("Clicou")}
      >
        <Image
          source={require("../../../assets/banner.jpg")}
          className="w-20 h-20 rounded-xl"
        />
        <Text
          className="text-sm mt-2 w-20 text-center leading-4 text-black"
          numberOfLines={2}
        >
          name
        </Text>
      </Pressable>
      <Pressable
        className="flex flex-col items-center justify-center"
        onPress={() => console.log("Clicou")}
      >
        <Image
          source={require("../../../assets/banner.jpg")}
          className="w-20 h-20 rounded-xl"
        />
        <Text
          className="text-sm mt-2 w-20 text-center leading-4 text-black"
          numberOfLines={2}
        >
          name
        </Text>
      </Pressable>
      <Pressable
        className="flex flex-col items-center justify-center"
        onPress={() => console.log("Clicou")}
      >
        <Image
          source={require("../../../assets/banner.jpg")}
          className="w-20 h-20 rounded-xl"
        />
        <Text
          className="text-sm mt-2 w-20 text-center leading-4 text-black"
          numberOfLines={2}
        >
          name
        </Text>
      </Pressable>
    </View>
    </ScrollView>
  );
}

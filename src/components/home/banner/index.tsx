import { View, Pressable, Image, ScrollView } from "react-native";

export function Banner() {
  const banners = [
    { id: "1", image: require("../../../assets/banner.jpg") },
    { id: "2", image: require("../../../assets/banner.jpg") },
    { id: "3", image: require("../../../assets/banner.jpg") },
  ];

  return (
    <View className="flex-1 mt-3">
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {banners.map((banner) => (
          <Pressable
            key={banner.id}
            onPress={() => console.log(`Clicou no banner ${banner.id}`)}
            className="mr-4"
          >
            <Image source={banner.image} className="w-80 h-40 rounded-xl" />
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
}

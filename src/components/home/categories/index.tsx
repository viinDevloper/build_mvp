import { View, Text, Pressable, Image, ScrollView } from "react-native";

const categories = [
  { id: "1", name: "Category 1", image: require("../../../assets/banner.jpg") },
  { id: "2", name: "Category 2", image: require("../../../assets/banner.jpg") },
  { id: "3", name: "Category 3", image: require("../../../assets/banner.jpg") },
  { id: "4", name: "Category 4", image: require("../../../assets/banner.jpg") },
  { id: "5", name: "Category 5", image: require("../../../assets/banner.jpg") },
];

export default function Categories() {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View className="flex-row gap-5">
        {categories.map((category) => (
          <Pressable
            key={category.id}
            className="flex flex-col items-center justify-center"
            onPress={() => console.log(`Clicou na categoria ${category.name}`)}
          >
            <Image
              source={category.image}
              className="w-20 h-20 rounded-xl"
            />
            <Text
              className="text-sm mt-2 w-20 text-center leading-4 text-black"
              numberOfLines={2}
            >
              {category.name}
            </Text>
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
}

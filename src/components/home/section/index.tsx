import { View, Text } from "react-native";

interface Props {
  name: string;
  size: "text-lg" | "text-xl" | "text-2xl";
}

export function Section({ name, size }: Props) {
  return (
    <View className="w-full flex flex-row items-center justify-between">
      <Text className={`${size} font-semibold my-4 self-start`}>{name}</Text>
    </View>
  );
}

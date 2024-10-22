import { useState } from "react";
import { TextInput, TextInputProps, View } from "react-native";

export const Input = ({ ...props }: TextInputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View
      className={`bg-bg200 w-full rounded-lg p-3 mb-4 ${
        isFocused ? "border-2 border-primary200" : "border-none"
      }`}
      style={{
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5, // Para Android
      }}
    >
      <TextInput
        className="text-text100"
        {...props}
        placeholderTextColor="#C4C5C4"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </View>
  );
};

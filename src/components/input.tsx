<<<<<<< HEAD
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

=======
import { ReactNode } from "react"
import { TextInput, TextInputProps, View } from "react-native"

interface InputProps extends TextInputProps {
    icon?: ReactNode
}

export function Input ({icon, ...props}: InputProps) {
    return (
        <View className="w-full">
          <TextInput
            placeholderTextColor='#c4c5c4'
            className="w-full rounded-lg h-[53] items-center px-4 text-text100 bg-bg200 focus:border-2 focus:outline-none focus:border-primary100"
            {...props}
          />
          {icon}
        </View>
    )
}
>>>>>>> fc4a1cb1aca723cf3da07d224099eed1e46eb422

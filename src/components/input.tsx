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
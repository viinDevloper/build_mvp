import { Pressable, PressableProps, Text } from "react-native"

interface ButtonProps extends PressableProps {
  variant?: 'PRIMARY' | 'SECUNDARY',
  title: string
}

export const Button = ({variant = 'PRIMARY', title, ...props}: ButtonProps) => {
  
  return (
    <Pressable className={`w-full p-4 rounded-lg justify-center items-center ${variant == 'PRIMARY' ? 'bg-primary100' : 'bg-transparent border-2 border-primary100'}`} {...props}>
        <Text className={`font-semibold ${variant == 'PRIMARY' ? 'text-text200' : 'text-primary100'}`}>{title}</Text>
    </Pressable>
  )
}
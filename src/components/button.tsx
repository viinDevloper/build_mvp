import { Pressable, PressableProps, Text } from "react-native";

interface ButtonProps extends PressableProps {
  variant?: "PRIMARY" | "SECUNDARY";
  title: string;
}

export const Button = ({
  variant = "PRIMARY",
  title,
  ...props
}: ButtonProps) => {
  const buttonStyles =
    variant === "PRIMARY"
      ? "bg-primary100"
      : "bg-transparent border-2 border-primary100";
  const textStyles =
    variant === "PRIMARY" ? "text-text200" : "text-primary100";

  return (
    <Pressable
      className={`w-full p-4 rounded-lg justify-center items-center ${buttonStyles}`}
      {...props}
    >
      <Text className={`font-semibold ${textStyles}`}>{title}</Text>
    </Pressable>
  );
};

import { Text, TouchableOpacity, View } from "react-native";
import { router } from "expo-router";

import { Button } from "../components/button";
import { Input } from "../components/input";

import LogoGoogle from "../../assets/images/google-logo.svg";
import LogoApple from "../../assets/images/apple-logo.svg";
import LogoLinkedin from "../../assets/images/linkedin-logo.svg";

const SignInScreen = () => {
  const handleLogin = () => {
    router.dismissAll();
    router.push("/(tabs)");
  };

  const handleSignup = () => {
    router.dismissAll();
    router.push("/signup");
  };

  const renderSocialButton = (Logo: React.FC<any>, altText: string) => (
    <TouchableOpacity
      className="w-12 h-12 bg-bg200 items-center justify-center rounded-lg"
      style={{
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5, // Para Android
      }}
      accessibilityLabel={altText}
    >
      <Logo width={24} height={24} />
    </TouchableOpacity>
  );

  return (
    <View className="flex-1 bg-bg100 justify-around items-center">
      <Text className="text-3xl font-bold">B2Y 2 You</Text>
      <View className="w-80">
        <Input placeholder="Seu nome" />
        <Input placeholder="Sua senha" secureTextEntry={true} />
        <Button title="Entrar" onPress={handleLogin} />
      </View>
      <View className="w-80 h-12 flex-row justify-around">
        {renderSocialButton(LogoGoogle, "Login com Google")}
        {renderSocialButton(LogoApple, "Login com Apple")}
        {renderSocialButton(LogoLinkedin, "Login com LinkedIn")}
      </View>
      <View>
        <Text className="text-text300 text-sm text-center mb-3">
          Você tem uma conta?
        </Text>
        <Button
          variant="SECUNDARY"
          title="Ir para o cadastro"
          className="w-80"
          onPress={handleSignup}
        />
      </View>
    </View>
  );
};

export default SignInScreen;

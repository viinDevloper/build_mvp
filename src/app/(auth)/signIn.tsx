import { Text, TouchableOpacity, View } from "react-native";
import { router } from "expo-router";
import { Button } from "../../components/button";
import { Input } from "../../components/input";
import LogoGoogle from "../../assets/images/google-logo.svg";
import LogoApple from "../../assets/images/apple-logo.svg";
import LogoLinkedin from "../../assets/images/linkedin-logo.svg";
import { auth } from "../../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";


export default function SignIn () {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      router.dismissAll();
      router.push("/(auth)signUp");
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      } else {
        console.error("Erro desconhecido", error);
      }
    }
  };
  const handleSignin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log(`Logado como: ${user.email}`);
      router.dismissAll();
      router.push("/(tabs)");
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      } else {
        console.error("Erro desconhecido", error);
      }
    }
  };

  const renderSocialButton = (Logo: React.FC<any>, altText: string) => (
    <TouchableOpacity
      className="w-12 h-12 bg-bg200 items-center justify-center rounded-lg"
      style={{
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
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
        <Input placeholder="Seu E-mail" value={email} onChangeText={setEmail} />
        <Input
          placeholder="Sua senha"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
        <Button title="Entrar" onPress={handleSignin} />
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


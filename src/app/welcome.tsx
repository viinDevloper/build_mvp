import { router } from "expo-router";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Button } from "../components/button";

const Welcome = () => {
  return (
    <View className="flex-1 bg-white justify-center items-center">
      {/* Logo Section */}
      <View className="items-center mb-72">
        <Image
          source={require("../assets/b2Y.jpg")}
          style={{ width: 250, height: 45 }}
        />
      </View>
      
      <View className="gap-6">
        {/* Login Button */}
        <Button title="Login"/>

        {/* Criar Conta Button */}
        <Button variant="SECUNDARY" title="Criar conta"/>
      </View>
    </View>
  );
};

export default Welcome;

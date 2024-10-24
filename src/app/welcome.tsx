import { View, Image, ScrollView } from "react-native";
import { Button } from "../components/button";

const Welcome = () => {
  return (
    <ScrollView>
      <View className="flex-1 h-screen bg-white justify-center items-center">
        {/* Logo Section */}
        <View className="items-center mb-72">
          <Image
            source={require("../assets/b2Y.jpg")}
            style={{ width: 250, height: 45 }}
          />
        </View>
          
        <View className="gap-6 w-full">
          {/* Login Button */}
          <Button title="Login"/>

          {/* Criar Conta Button */}
          <Button variant="SECUNDARY" title="Criar conta"/>
        </View>
      </View>
    </ScrollView>
  );
};

export default Welcome;

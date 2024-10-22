import { View, Text, Image, TouchableOpacity } from 'react-native'

const Welcome = () => {
  return (
    <View className="flex-1 bg-white justify-center items-center ">
      {/* Logo Section */}
      <View className="items-center mb-[296px]">
        <Image
          source={require("../assets/b2Y.jpg")}
          style={{ width: 250, height: 45 }}
        />
      </View>

      {/* Login Button */}
      <TouchableOpacity className="bg-orange-500 w-[347px] rounded-md py-4 mb-4">
        <Text className="text-white text-center text-lg">Login</Text>
      </TouchableOpacity>

      {/* Criar Conta Button */}
      <TouchableOpacity className="border border-orange-500 w-[347px] rounded-md py-4">
        <Text className="text-orange-500 text-center text-lg">Criar conta</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Welcome
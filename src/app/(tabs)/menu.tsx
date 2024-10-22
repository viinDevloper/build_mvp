import { View, Image, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

type Props = {}

const ProfileScreen = (props: Props) => {
  return (
    <SafeAreaView className='flex-1'>
      <View className="flex-1 bg-white">
        {/* Cabeçalho */}
        <View className="bg-[#FF6600] p-4 flex-row items-center">
          <Image
            source={{ uri: 'https://via.placeholder.com/150' }}
            className="w-16 h-16 rounded-full"
          />
          <View className="ml-4">
            <Text className="text-white text-lg">Vinicius Moreira</Text>
            <Text className="text-white">Minha Conta</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}



export default ProfileScreen






import { View, Text } from 'react-native'

import { FontAwesome5 } from '@expo/vector-icons'
import { Link } from 'expo-router'

export default function Localization() {
  return (
    <View className="flex-1 flex-row items-center mt-6 ml-1">
      <Link href={"/localization"}>
        <View className='flex-row justify-center items-center'>
          <FontAwesome5 name="map-marker-alt" size={24} color="#FF6600"  />
          <Text className='left-[6px]'>DDD 11 - São Paulo e Região</Text>
        </View>
      </Link>
    </View>
  )
}
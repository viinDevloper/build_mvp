import { View, Text } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons'

export default function Localization() {
  return (
    <View className="flex-1 flex-row items-center mt-3">
        <FontAwesome5 name="map-marker-alt" size={24} color="#FF6600" />
        <Text className="ml-2">DDD 11 - São Paulo e Região</Text>
      </View>
  )
}
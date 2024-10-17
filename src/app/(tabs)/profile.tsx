import { Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

type Props = {}

const ProfileScreen = (props: Props) => {
  return (
    <View className='flex-1 justify-center items-center'>
      <Text>Profile Screen</Text>
      <Link href={"/signin"}>
        <Text>Sair</Text>
      </Link>
    </View>
  )
}

export default ProfileScreen






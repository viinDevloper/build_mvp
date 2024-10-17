import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Link, router } from 'expo-router'

type Props = {}

const SignInScreen = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text className='text-3xl'>B2Y 2 You </Text>
      <TextInput className='bg-bg200 h-8 w-80' placeholder='Seu nome'></TextInput>
      <TextInput className='bg-bg200 h-8 w-80' placeholder='Sua senha'></TextInput>
      <TouchableOpacity onPress={() => {
          router.dismissAll();
          router.push('/(tabs)');
        }}
        className="bg-primary100 text-sm h-8 w-80 justify-center items-center rounded-lg"
      >
          <Text 
            className='text-text200'
          >
            Entrar
          </Text>
        </TouchableOpacity>
        
        <View>

        </View>
        <TouchableOpacity onPress={() => {
          router.dismissAll();
          router.push('/signup');
        }}
        className="h-8 w-80 justify-center items-center rounded-lg border-solid border-primary100 border"
        >
          <Text>Ir para o cadastro</Text>
        </TouchableOpacity>
    </View>
  )
}

export default SignInScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
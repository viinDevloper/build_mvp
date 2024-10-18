import { Text, TouchableOpacity, View } from 'react-native'
import { router } from 'expo-router'

import { Button } from '../components/buttom'
import { Input } from '../components/input'

import LogoGoogle from '../../assets/images/google-logo.svg';
import LogoApple from '../../assets/images/apple-logo.svg';
import LogoLinkedin from '../../assets/images/linkedin-logo.svg';

type Props = {}

const SignInScreen = (props: Props) => {
  return (
    <View className='flex-1 bg-bg100 justify-around items-center'>
      <Text className='text-3xl font-bold'>B2Y 2 You </Text>
      <View className='w-80'>
        <Input 
          placeholder='Seu nome' 
          />
        <Input
          placeholder='Sua senha' 
          secureTextEntry={true}
         />
        <Button 
          title='Entrar'  
          onPress={() => {
            router.dismissAll();
            router.push('/(tabs)');
          }}/>
      </View>
      <View className='w-80 h-12 flex-row justify-around'>
        <TouchableOpacity 
          className='w-12 h-12 bg-bg200 items-center justify-center rounded-lg'
          style={{
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5, // Para Android
          }}
        >
          <LogoGoogle width={24} height={24}/>
        </TouchableOpacity>
        <TouchableOpacity 
          className='w-12 h-12 bg-bg200 items-center justify-center rounded-lg'
          style={{
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5, // Para Android
          }}
        >
          <LogoApple width={24} height={24}/>
        </TouchableOpacity>
        <TouchableOpacity 
          className='w-12 h-12 bg-bg200 items-center justify-center rounded-lg'
          style={{
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5, // Para Android
          }}
        >
          <LogoLinkedin width={24} height={24}/>
        </TouchableOpacity>
      </View>
      <View>
        <Text className='text-text300 text-sm text-center mb-3'>Você tem uma conta? </Text>
        <Button 
          variant='SECUNDARY' 
          title='Ir para o cadastro' 
          className='w-80' 
          onPress={() => {
            router.dismissAll();
            router.push('/signup');
          }}/>
      </View>
    </View>
  )
}

export default SignInScreen
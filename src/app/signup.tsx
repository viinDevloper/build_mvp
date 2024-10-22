import { Link } from 'expo-router';
import { Text, View, TextInput, TouchableOpacity, Image, } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

type Props = {}

const SignUpScreen = (props: Props) => {
  return (
    <SafeAreaView className="flex-1 bg-white">

      <View className="flex-1 px-6 justify-center items-center">
        <Text className="text-2xl font-bold mb-8">B2Y 2 You</Text>

        <View
         className="w-24 h-24 rounded-full mb-8 items-center justify-center">
          <Image
            source={require('../assets/Frame 17.png')}
            className="w-24 h-24"
          />
        </View>

        <View className="w-full space-y-4 mb-8">
          <TextInput
            placeholder="Nome"
            className="w-full border border-gray-300 rounded-lg p-3"
          />
          <TextInput
            placeholder="Seu telefone"
            className="w-full border border-gray-300 rounded-lg p-3"
          />
          <TextInput
            placeholder="Cpf/Cnpj"
            className="w-full border border-gray-300 rounded-lg p-3"
          />
          <TextInput
            placeholder="Sua senha"
            secureTextEntry
            className="w-full border border-gray-300 rounded-lg p-3"
          />
          <TextInput
            placeholder="Confirme sua senha"
            secureTextEntry
            className="w-full border border-gray-300 rounded-lg p-3"
          />
        </View>

        <TouchableOpacity className="w-full bg-orange-500 rounded-lg p-4 items-center mb-4">
          <Text className="text-white font-bold">Cadastrar</Text>
        </TouchableOpacity>

        <Text className="mb-2">Já tem uma conta?</Text>
        <TouchableOpacity>
          <Link href={"/signin"}>
            <Text className="text-orange-500 font-bold">Ir para o login</Text>
          </Link>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default SignUpScreen
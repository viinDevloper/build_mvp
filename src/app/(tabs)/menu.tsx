import { MaterialIcons } from '@expo/vector-icons';
import { View, Image, Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';

type Props = {}

const ProfileScreen = (props: Props) => {
  return (
    <View className="flex-1 bg-white">
      {/* Cabeçalho */}
      <View className="bg-[#FF6600] p-4 flex-row items-center">
        <Image
          source={{ uri: 'https://via.placeholder.com/150' }} // Substituir pelo avatar correto
          className="w-16 h-16 rounded-full"
        />
        <View className="ml-4">
          <Text className="text-white text-lg">Vinicius Moreira</Text>
          <Text className="text-white">Minha Conta</Text>
        </View>
      </View>

      {/* Menu Items */}
      <ScrollView className="flex-1 bg-white p-4">
        <MenuItem icon="notifications" title="Notificações" />
        <MenuItem icon="list-alt" title="Meus Anúncios" />
        <MenuItem icon="shopping-bag" title="Minhas Vendas" />
        <MenuItem icon="credit-card" title="Carteira OLX Pay" />
        <MenuItem icon="work" title="Plano Profissional" />
        <MenuItem icon="share" title="Meu Perfil Público" />
        <MenuItem icon="shopping-cart" title="Minhas Compras" />
        <MenuItem icon="favorite" title="Favoritos" />
      </ScrollView>
    </View>
  )
}

function MenuItem({ icon, title }) {
    return (
      <View className="flex-row items-center justify-between py-4">
        <View className="flex-row items-center">
          <MaterialIcons name={icon} size={24} color="black" />
          <Text className="ml-4 text-base text-gray-800">{title}</Text>
        </View>
        <MaterialIcons name="chevron-right" size={24} color="black" />
      </View>
    );
  }

export default ProfileScreen






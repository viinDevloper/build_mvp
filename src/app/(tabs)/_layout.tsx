import { Tabs } from "expo-router";
import { Ionicons } from '@expo/vector-icons';
import Octicons from '@expo/vector-icons/Octicons';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      headerShown: false, 
      tabBarStyle: { 
        backgroundColor: '#FF6600', 
        borderTopColor: '#ccc' }, 
        tabBarLabelStyle: { fontSize: 14, color: '#FFF'},
        }}>
      <Tabs.Screen name='index' options={{
        title: 'Inicio',
        tabBarIcon: ({}) => (
          <Octicons name='home' size={22} color={'#FFF'} />
        )
      }} />
      <Tabs.Screen name='explore' options={{
        title: 'Buscar',
        tabBarIcon: ({}) => (
          <Ionicons name='search-sharp' size={22} color={'#FFF'} />
        )
      }} />
      <Tabs.Screen name='announce' options={{
        title: 'Anunciar',
        tabBarIcon: ({}) => (
          <Ionicons name='add-circle-outline' size={25} color={'#FFF'} />
        )
      }} />
      <Tabs.Screen name='messagens' options={{
        title: 'Mensagens',
        tabBarIcon: ({}) => (
          <Ionicons name='chatbubbles-sharp' size={22} color={'#FFF'} />
        )
      }} />
      <Tabs.Screen name='menu' options={{
        title: 'Menu',
        tabBarIcon: ({}) => (
          <Ionicons name='menu-outline' size={27} color={'#FFF'} />
        )
      }} />
    </Tabs>
  );
}
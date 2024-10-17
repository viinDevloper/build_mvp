import React from 'react';
import { Tabs } from "expo-router";
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{headerShown: true}}>
      <Tabs.Screen name='index' options={{
        title: 'Home',
        tabBarIcon: ({color}) => (
          <Ionicons name='home-outline' size={22} color={color} />
        )
      }} />
      <Tabs.Screen name='explore' options={{
        title: 'Explore',
        tabBarIcon: ({color}) => (
          <Ionicons name='search-outline' size={22} color={color} />
        )
      }} />
      <Tabs.Screen name='notifications' options={{
        title: 'Notification',
        tabBarIcon: ({color}) => (
          <Ionicons name='notifications-outline' size={22} color={color} />
        )
      }} />
     
      <Tabs.Screen name='profile' options={{
        title: 'Profile',
        tabBarIcon: ({color}) => (
          <Ionicons name='person-outline' size={22} color={color} />
        )
      }} />
      <Tabs.Screen name='messagens' options={{
        title: 'messagens',
        tabBarIcon: ({color}) => (
          <Ionicons name='person-outline' size={22} color={color} />
        )
      }} />
    </Tabs>
  );
}
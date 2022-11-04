import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeScreen } from '../screens/HomeScreen';
import { SettingScreen } from '../screens/SettingScreen';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <Tab.Navigator 
    screenOptions={ ({ route }) => ({
      // #7 Se genera la pripiedad tabBarIcon con una arrowFunction
      tabBarIcon: ({ focused, color, size }) => {
        // #8 Se crea variable que alamcena el nombre del Icono en cuestion
        let nameIcon='';
        // #9 Generamos un switch que, en base al nombre rescatado de la screen, establece un nombre de icono u otro
        switch(route.name){
          case 'House':
            nameIcon= focused ? 'create' : 'create-outline';
          break;
          case 'Ajustes':
            nameIcon= focused ? 'trophy' : 'trophy-outline';
          break;
        }
        return <Icon name={nameIcon} color={ color } size={ size } />
      }
    })}
    >
      <Tab.Screen 
        name='House'
        component={ HomeScreen }
        options={{ headerShown: false }}
        />
      <Tab.Screen 
        name='Ajustes'
        component={ SettingScreen }
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  )
}
import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack"
// components
import HomePage from '../pages/Homepage'
import Dashboard from '../pages/Dashboard'

const { Navigator, Screen } = createNativeStackNavigator()

export default function Navigation() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
        <Screen name='home' component={HomePage} />
        <Screen name='dashboard' component={Dashboard} />
    </Navigator>
  )
}
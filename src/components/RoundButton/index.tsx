import { View, Text } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { COLORS } from '../../constants/colors'

export default function RoundedButton() {
  return (
    <View style={{ width: 60, height: 60, justifyContent: 'center', alignItems: 'center', borderRadius: 30, backgroundColor: COLORS.MAIN }}>
        <Ionicons color="white" name="add" size={30} />
    </View>
  )
}
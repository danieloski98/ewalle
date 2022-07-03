import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS } from '../../constants/colors'
import { Style } from './style'


export default function MenuItem({ icon, text }: { icon: any, text: string }) {
  return (
    <TouchableOpacity style={{ width: 70, marginRight: 10, marginBottom: 20 }}>
      <View style={{ width: 70, height: 70, borderRadius: 10, backgroundColor: COLORS.LIGHTGREY, justifyContent: 'center', alignItems: 'center' }}>
        {icon}
      </View>
      <Text style={[Style.tinyText, {textAlign: 'center', marginTop: 10, fontFamily: 'Ubuntu-Regular'  }]}>{text}</Text>
    </TouchableOpacity>
  )
}
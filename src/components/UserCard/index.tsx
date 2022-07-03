import { View, Text, Image } from 'react-native'
import { Styles } from './style'
import React from 'react'
import { COLORS } from '../../constants/colors'

export default function UserCard({ name }: { name: string }) {
  return (
    <View style={{ width: 100, height: 130, borderRadius: 10, backgroundColor: COLORS.LIGHTGREY, justifyContent: 'center', alignItems: 'center', marginHorizontal: 10 }}>
        <View style={{ width: 50, height: 50, borderRadius: 25, borderWidth: 1.5, borderColor: 'lightgrey', backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
          <Image source={require('../../../assets/avatar.png')} resizeMode="cover" style={{ width: 35, height: 35 }} />
        </View>

        <Text style={[Styles.smallText, { fontFamily: 'Ubuntu-Regular'  }]}>{name}</Text>
    </View>
  )
}
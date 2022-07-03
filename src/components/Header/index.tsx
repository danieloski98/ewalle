import { View, Text, Image } from 'react-native'
import { Styles } from './style'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { COLORS } from '../../constants/colors'

const Header = () => {
  return (
    <View style={Styles.parent}>
      <View style={{ flexDirection: 'row', alignItems: 'center', height: '100%' }}>
          <Image source={require('../../../assets/logo.png')} resizeMode="contain" style={{ width: 60, height: 60}} />
          <Text style={[Styles.bigText, {marginLeft: 20, fontFamily: 'Ubuntu-Medium' }]}>eWalle</Text>
      </View>

      <View style={{ height: '100%', justifyContent: 'center'}}>
        <Ionicons name="grid" size={30} color="#25044967" />
      </View>
    </View>
  )
}

export default Header
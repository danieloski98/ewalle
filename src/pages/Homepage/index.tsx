import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Styles } from './style'
import { Ionicons } from '@expo/vector-icons'
import { COLORS } from '../../constants/colors'

const HomePage = ({ navigation }) => {
  return (
    <View style={Styles.parent}>
       <View style={Styles.imagebackground}>
       <ImageBackground source={require('../../../assets/main.png')} resizeMode="stretch" style={[StyleSheet.absoluteFillObject, {width: 220}]}></ImageBackground>  
       </View>
        <View style={Styles.mainarea}>

            {/* date area */}
            <View style={Styles.datebox}>
                <View style={Styles.dateitem1}>
                    <Text style={[Styles.bigText, {fontFamily: 'Ubuntu-Regular' }]}>{new Date().toLocaleTimeString()}</Text>
                    <View style={{ flexDirection: 'row', height: '100%', alignItems: 'center'}}>
                        <Ionicons name="cloud" color={COLORS.MAIN} size={30} style={{ marginRight: 10 }} />
                        <Text style={[Styles.smallText, { fontFamily: 'Ubuntu-Regular'  }]}>34C</Text>
                    </View>
                </View>

                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <Text style={[Styles.tinyText, { fontFamily: 'Ubuntu-Regular'  }]}>{new Date().toDateString()} | Wednesday</Text>
                </View>
            </View>

            <View style={Styles.mainContent}>
                <Image source={require('../../../assets/logo.png')} />
                <Text style={[Styles.bigText, {marginTop: 20, fontSize: 25, fontFamily: 'Ubuntu-Medium' }]}>eWalle</Text>
                <Text style={[ Styles.smallText, { marginTop: 20, fontFamily: 'Ubuntu-Regular', lineHeight: 25 }]}>Open An Account For Digital E-Wallet Solutions. Instant Payouts.</Text>
                <Text style={[ Styles.smallText, { marginTop: 20, fontFamily: 'Ubuntu-Regular'  }]}>Join For Free.</Text>
            </View>

            <View style={Styles.footerarea}>
                <TouchableOpacity onPress={() => navigation.navigate('dashboard')} style={Styles.btn}>
                    <Text style={[Styles.smallText, { color: 'white', fontFamily: 'Ubuntu-Medium'  }]}>Sign in</Text>
                    <Ionicons name="arrow-forward" size={25} color="white" style={{ marginLeft: 10}} />
                </TouchableOpacity>

                <Text style={[Styles.smallText, { textAlign: 'center', marginTop: 20, fontFamily: 'Ubuntu-Regular'  }]}>Create An Account</Text>
            </View>

        </View>
    </View>
  )
}

export default HomePage
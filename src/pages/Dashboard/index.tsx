import { Text, View , Image} from 'react-native'
import React from 'react'
import { Styles } from './style'
import { Ionicons } from '@expo/vector-icons'

// component
import Header from '../../components/Header'
import { ScrollView } from 'react-native-gesture-handler'
import RoundedButton from '../../components/RoundButton'
import UserCard from '../../components/UserCard'
import MenuItem from '../../components/MenuItems'

const Dashboard = () => {
  return (
    <View style={Styles.parent}>
      <Header />
      <ScrollView style={{ flex: 1, padding: 20 }}>

        {/* account overview */}
        <View>
          <Text style={[Styles.smallText, { fontFamily: 'Ubuntu-Regular'  }]}>Account Overview</Text>
          <View style={[Styles.accountCard]}>
            <View>
              <Text style={[Styles.bigText, { fontFamily: 'Ubuntu-Medium' }]}>20,600</Text>
              <Text style={[Styles.tinyText, { marginTop: 20, fontFamily: 'Ubuntu-Regular'  }]}>Current balance</Text>
            </View>

            <RoundedButton />
          </View>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 40 }}>
          <Text style={[Styles.smallText, { fontFamily: 'Ubuntu-Regular'  }]}>Send Money</Text>
          <Ionicons name="qr-code" size={30} color="#3A4276" />
        </View>

        <View style={{ width: '100%', height: 120, marginTop: 20 }}>
          <ScrollView horizontal showsHorizontalScrollIndicator>
            <View style={{ width: 80, height: '100%', justifyContent: 'center', alignItems: 'center' }}>
              <RoundedButton />
            </View>

            <UserCard name="Mike" />
            <UserCard name="Ike" />
            <UserCard name="Jay" />
            <UserCard name="Dan" />
          </ScrollView>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 40 }}>
          <Text style={[Styles.smallText, { fontFamily: 'Ubuntu-Regular'  }]}>Services</Text>
          <Ionicons name="filter" size={30} color="#3A4276" />
        </View>

        <View style={{ width: '100%', flexDirection: 'row', marginTop: 20, flexWrap: 'wrap', justifyContent: 'space-between', marginBottom: 100}}>

          <MenuItem icon={<Image source={require('../../../assets/icons/sendm.png')} style={{ width: 30, height: 30}} resizeMode="contain" />} text="Send Moeny" />
          <MenuItem icon={<Image source={require('../../../assets/icons/recievem.png')} style={{ width: 30, height: 30}}  resizeMode="contain" />} text="Recieve Money" />
          <MenuItem icon={<Image source={require('../../../assets/icons/mobile.png')} style={{ width: 30, height: 30}}  resizeMode="contain" />} text="Mobile Prepaid" />
          <MenuItem icon={<Image source={require('../../../assets/icons/electric.png')} style={{ width: 30, height: 30}}  resizeMode="contain" />} text="Electricity Bill" />
          <MenuItem icon={<Image source={require('../../../assets/icons/cashback.png')} style={{ width: 30, height: 30}}  resizeMode="contain" />} text="Cashback Offer" />

          <MenuItem icon={<Image source={require('../../../assets/icons/movie.png')} style={{ width: 30, height: 30}}  resizeMode="contain" />} text="Movie Tickets" />
          <MenuItem icon={<Image source={require('../../../assets/icons/flight.png')} style={{ width: 30, height: 30}}  resizeMode="contain" />} text="Flight Tickets" />
          <MenuItem icon={<Image source={require('../../../assets/icons/more.png')} style={{ width: 30, height: 30}}  resizeMode="contain" />} text="More Options" />

        </View>

      </ScrollView>
    </View>
  )
}

export default Dashboard

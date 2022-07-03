import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import * as Fonts from 'expo-font'
import { useState, useEffect } from 'react'

// components
import Navigation from './src/navigation'

export default function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    loadFonts();
  })

  const loadFonts = async() => {
    await Fonts.loadAsync({
      // Load a font `Montserrat` from a static resource
      Montserrat: require('./assets/fonts/M.ttf'),

      // Any string can be used as the fontFamily name. Here we use an object to provide more control
      'Ubuntu-Medium': {
        uri: require('./assets/fonts/Ubuntu-Medium.ttf'),
        display: Fonts.FontDisplay.FALLBACK,
      },
      'Ubuntu-Regular': {
        uri: require('./assets/fonts/Ubuntu-Regular.ttf'),
        display: Fonts.FontDisplay.FALLBACK,
      },
    });
    setLoaded(true)
  }
  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
}


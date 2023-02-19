import React, { useCallback } from 'react';
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  ImageBackground,
} from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { RegistrationScreen } from './src/Screens/RegistrationScreen';
import { LoginScreen } from './src/Screens/LoginScreen';

const imagePath = require('./assets/images/bg-photo.png');

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container} onLayout={onLayoutRootView}>
        <ImageBackground source={imagePath} style={styles.image}>
          <RegistrationScreen />
          {/* <LoginScreen /> */}
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    resizeMode: 'cover',
  },
});

import React from 'react';
import { StatusBar, SafeAreaView, View } from 'react-native';
import { 
  useFonts, 
  Montserrat_400Regular, 
  Montserrat_700Bold,
} from '@expo-google-fonts/montserrat';

import Carrinho from './src/screens/Carrinho';
import mocks from './mocks/carrinho';

export default function App() {
  const [fonteCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  });

  if (!fonteCarregada) {
    return <View />
  }

  return (
    <SafeAreaView>
      <StatusBar />
      <Carrinho {...mocks}/>
    </SafeAreaView>
  );
}

import { View, StatusBar, SafeAreaView } from 'react-native';
import {
  useFonts,
  PlayfairDisplay_400Regular,
  PlayfairDisplay_600SemiBold,
} from '@expo-google-fonts/playfair-display';

import Index from './src/screens/Cursos';
import mocks from './mocks/curso';

export default function App() {

  const [fontLoad] = useFonts({
    "PlayfairDisplayRegular": PlayfairDisplay_400Regular,
    "PlayfairDisplayBold" : PlayfairDisplay_600SemiBold,
  });

  if(!fontLoad){
    return <View /> 
  }


  return (
    <SafeAreaView>
      <StatusBar />
      <Index {...mocks}/>
    </SafeAreaView>
  );
}
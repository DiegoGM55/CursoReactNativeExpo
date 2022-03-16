import { View, StatusBar, SafeAreaView } from 'react-native';



import Carrinho from './src/telas/carrinho.js'

export default function App() {
  return (
    <SafeAreaView>
      <Carrinho/>
      <StatusBar />
    </SafeAreaView>
  );
}



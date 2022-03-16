import React from 'react';
import { StyleSheet, View, FlatList} from 'react-native';

import Topo from '../Carrinho/components/Topo';
import Corpo from '../Carrinho/components/Corpo';
import Item from './components/Item';
import Texto from '../../components/Texto';


export default function Carrinho({topo, corpo, itens}){
  return <FlatList 
                    data={itens.lista}
                    renderItem={Item}
                    keyExtractor={({nome}) => nome}
                    ListHeaderComponent={
                      ( ) => {
                          return <>
                            <Topo {...topo}/>

                            <View style={estilos.carrinho}>
                              <Corpo {...corpo}/>
                            </View>
                            <Texto style={estilos.titulo}>{itens.titulo}</Texto>

                          </>

                      }
                    }
            />
  
}

const estilos = StyleSheet.create({
    carrinho: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    titulo:{
      fontWeight: "bold",
      color: "#ffa500",
      fontSize: 25,
      width: "100%",
      textAlign: "center",
      marginVertical: 15
  },
});

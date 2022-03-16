import React from 'react';
import { Text, Image, StyleSheet, Dimensions, View} from 'react-native';

import topo from '../../assets/topo.png';
import logo from '../../assets/logo.png';

const width = Dimensions.get('screen').width;

export default function Carrinho(){
    return <>
        <Image source={topo} style={estilos.topo} /> 
        <Text style={estilos.carrinho}>Carrinho</Text>

        <Text style={estilos.titulo}>Kit IOT</Text>

        <View style={estilos.vendedor}>
            <Image style={estilos.logoVendedor} source={logo}/>
            <Text style={estilos.nomeVendedor}>Nuvem Shop</Text>
        </View>

        <Text style={estilos.descricao}>Um Kit IOT para iniciantes se aventurarem nas nuvens</Text>
        <Text style={estilos.preco}>R$ 99,99</Text>
    </>
}
const estilos = StyleSheet.create({
    topo: {
      width: "100%",
      height: 582/772*width,
    },
    carrinho: {
        position: 'absolute',
        fontSize: 16,
        lineHeight: 26,
        color: "red",
        fontWeight: "bold",
        padding: 16,
    },
    titulo: {
        fontWeight: "bold",
        color: "#ffa500",
        fontSize: 26,
        lineHeight: 36,
    },
    nomeVendedor: {
        fontSize: 16,
        lineHeight: 26,
        color:"#a3a3a3",
        marginLeft: 10,
    },
    descricao: {
        color:"black",
        fontSize:26,
    },
    preco: {
        color: "#ffa500",
        fontSize: 26,
        lineHeight: 36,
        marginTop: 10,
        fontWeight: "bold",
    },
    logoVendedor: {
        width: 40,
        height: 40,
    },

});
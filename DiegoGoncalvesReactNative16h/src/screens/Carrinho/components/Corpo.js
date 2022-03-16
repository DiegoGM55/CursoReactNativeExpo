import React from "react";
import {StyleSheet, View, Image} from "react-native";

import Texto from '../../../components/Texto';

export default function Corpo({nome, nomeVendedor, imagemVendedor, desc, preco}){
    return <>

        <Texto style={estilos.nome}>{nome}</Texto>
        <View style={estilos.vendedor}>
            <Image source={imagemVendedor} style={estilos.logoVendedor} />
            <Texto style={estilos.nomeVendedor}> {nomeVendedor}</Texto>
        </View>
        <Texto style={estilos.descricao}>{desc}</Texto>
        <Texto style={estilos.preco}>{preco}</Texto>

    </>
}

const estilos = StyleSheet.create({
    carrinho: {
        paddingVertical: 8,
        paddingHorizontal: 16,
      },
      nome: {
        color: "#464646",
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold",
      },
      vendedor: {
        flexDirection: "row",
        paddingVertical: 12,
      },
      logoVendedor: {
        width: 32,
        height: 32,
      },
      nomeVendedor: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
      },
      descricao: {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26,
      },
      preco: {
        color: "#464646",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8,
        textAlign: "right",
      },
})
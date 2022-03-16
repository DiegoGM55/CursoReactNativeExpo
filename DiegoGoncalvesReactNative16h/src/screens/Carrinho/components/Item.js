import React from "react";
import {View, Image, StyleSheet} from "react-native";
import Texto from "../../../components/Texto";

export default  function Item ({item:{nome, imagem}}) {
    return <View style={styles.lista}>
        <Image style={styles.imgProduto} source={imagem}/>
        <Texto style={styles.txtProduto}>{nome}</Texto>
    </View>
}

const styles = StyleSheet.create({

    lista:{
        flexDirection: "row",
        marginBottom: 30
    },
    imgProduto:{
        width:100,
        height: 60,
        marginHorizontal: 10
    },
    txtProduto:{
        color: "#a5a5a5",
        fontSize: 18,
        marginTop: 10
    }

})
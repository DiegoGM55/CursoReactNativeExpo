import React from "react";
import {View, StyleSheet, Dimensions, Image} from "react-native";

import Texto from "../../../components/Text1";

const width = Dimensions.get("screen").width;

export default function Header({title, image}){

    return <View style={styles.topo}>

                <Image style={styles.imagemTopo} source={image}/>
                <Texto style={styles.titulo}>{title}</Texto>
           
           </View>
}

const styles = StyleSheet.create({
    imagemTopo: {
        width: "100%",
        height: 200/230*width,
    },
    titulo: {
        position: "absolute",
        top: 20,
        left:0,
        right:0,
        marginLeft:"auto",
        marginRight:"auto",
        textAlign: "center",
        color: "#fff",
        fontSize: 30,
        lineHeight: 36,
        backgroundColor: "black",
    },
})
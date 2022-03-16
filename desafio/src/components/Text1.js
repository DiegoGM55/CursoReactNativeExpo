import React from "react";
import {Text, StyleSheet} from "react-native";

export default function Text1({children, style}){

    let styleApplied = estilo.text;

    if( style?.fontWeight === "bold"){
        styleApplied = estilo.textBold;
    }

    return <Text style={[style, styleApplied]}>{children}</Text>
}

const estilo = StyleSheet.create({
    text: {
        fontFamily: "PlayfairDisplayRegular",
        fontWeight: "normal",
    },
    textBold: {
        fontFamily: "PlayfairDisplayBold",
        fontWeight: "normal",
    }
})
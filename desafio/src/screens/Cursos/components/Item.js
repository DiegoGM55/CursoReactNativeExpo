import React from "react";
import {View, StyleSheet, Image} from "react-native";
import Texto from '../../../components/Text1';

export default function Item({item:{name, desc, image}}){

    return (

        <View style={styles.curso}>
            <Image style={styles.imagemCurso} source={image}/>
            <View style={styles.sobreCurso}>
                <Texto style = {styles.tituloCurso}>{name}</Texto>
                <Texto style = {styles.descCurso}>{desc}</Texto>
            </View>
        </View>

    );

}

const styles = StyleSheet.create({

    curso:{
        flexDirection: 'row',
        marginLeft: 15,
        marginTop: 10,
    },
    imagemCurso:{
        width: "30%",
        height: 80,
    },
    sobreCurso: {
        marginLeft: "3%",
    },
    tituloCurso:{
        fontWeight: "bold",
        marginBottom: 5,
    },
    descCurso:{
        width: "60%",
    }

})
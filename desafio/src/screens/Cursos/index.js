import React from 'react';
import { Image, View, StyleSheet, FlatList} from 'react-native';


import Texto from '../../components/Text1';
import Header from './components/Header';
import Item from './components/Item';

export default function Index({header, body}){
    return <FlatList
                data = {body.list}
                renderItem = {Item}
                keyExtractor={({name}) => name}
                ListHeaderComponent={
                    ( ) => {
                        return (<>
                            <Header {...header}/>
                            <View style={styles.cursos}>
                                <Texto style={styles.cursosTitulo}>Cursos Disponíveis</Texto>
                            </View>
                        </>);
                    }
                }
    
            />
    
}

const styles = StyleSheet.create({

    cursosTitulo: {
        textAlign: "center",
        marginTop: 10,
        fontSize: 22,
        lineHeight: 32,
    },
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
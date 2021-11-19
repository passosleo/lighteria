import React from "react";
import {Text, Image, StyleSheet, TouchableOpacity} from "react-native";
import {useNavigation} from '@react-navigation/native'

export const Item = ({imagem, titulo, estudio, itemDesc, itemName, preco, id}) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity style={styles.containerItem} onPress={() => navigation.push('DetalhesProduto', {
            itemDesc, 
            imagem, 
            estudio, 
            titulo, 
            preco, 
            id, 
            itemName,
        })}>
            <Image source={imagem} style={styles.imagem} resizeMode='contain'/>
            <Text style={styles.texto}>{titulo}</Text>
        </TouchableOpacity>
    );    
};

const styles = StyleSheet.create({
    containerItem: {
        height: 168,
        backgroundColor: '#FFF',
        borderRadius: 10,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 8,
    },
    texto: {
        marginTop: 8,
        fontWeight: '600',
        fontSize: 14,
        color: '#848486'
    },
    imagem: {
        height: 84,
    },
});
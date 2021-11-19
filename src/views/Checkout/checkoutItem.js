import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export const CheckoutItem = ({
    itemName,
    titulo,
    imagem,
    preco,
    quantidade,
}) => {
    return (
        <View style={styles.containerItem}>
            <View style={styles.imagemContainer}>
                <Image source={imagem} style={styles.imagem} />
            </View>
            <View style={styles.descContainer}>
                <Text style={styles.descTextoSuperior}>{itemName}</Text>
                <Text style={styles.descTextoInferior}>{titulo}</Text>
            </View>
            <View style={styles.precoContainer}>
                <Text style={styles.precoTexto}>R${preco * quantidade}</Text>
                <Text style={styles.precoTexto}>Qtd: {quantidade}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    containerItem: {
        backgroundColor: '#fff',
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 4,
    },
    imagemContainer: {
        flex: 20,
        backgroundColor: '#F7F8FC',
        padding: 18,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imagem: {
        width: 40,
        height: 50,
    },
    descContainer: {
        flex: 25,
        padding: 18,
        justifyContent: 'center',
    },
    descTextoSuperior: {
        fontSize: 16,
        color: '#000',
    },
    descTextoInferior: {
        fontSize: 14,
    },
    precoContainer: {
        flex: 35,
        padding: 18,
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    precoTexto: {
        textAlign: 'center',
        padding: 4,
        fontSize: 16,
        color: '#000',
    },
});
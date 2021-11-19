import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Sacola} from '../../../../components/sacola';

const Cabecalho = () => {
    return (
        <>
            <View style={styles.containerTitulo}>
                <Text style={styles.titulo}>LIGHTERIA</Text>
                <Sacola/>
            </View>
            <View style={styles.containerDescricao}>
                <View style={styles.separador} />
                <View style={styles.containerTexto}>
                    <Text style={styles.textoDescricao}>Categorias</Text>
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    containerTitulo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 6,
        paddingVertical: 16,
    },
    titulo: {
        fontSize: 32,
        fontWeight: '900',
        color: '#000',
        letterSpacing: 1,
    },
    separador: {
        borderWidth: 0.5,
        borderColor: '#A1A5AA',
        margin: 10,
    },
    containerTexto: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: -39,
    },
    textoDescricao: {
        padding: 16,
        backgroundColor: '#F4F0F4',
        fontSize: 16,
        color: '#A1A5AA',
    },
});

export default Cabecalho;
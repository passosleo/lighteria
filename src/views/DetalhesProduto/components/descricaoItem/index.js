import React, {useContext} from "react";
import {View, StyleSheet, Text, Image} from "react-native";
import {Botao} from '../../../../components/botao';
import {useNavigation} from '@react-navigation/native';
import {DataContext} from '../../../../provider';

export const DescricaoItem = ({
    imagem, 
    estudio, 
    itemDesc, 
    itemName, 
    titulo, 
    preco, 
    id,
}) => {
    const {adicionarItem} = useContext(DataContext);
    const navigation = useNavigation();
    return (
        <View style={styles.itemContainer}>
            <View style={styles.itemPosicao}>
                <View style={styles.item}>
                    <View style={styles.textoPosicao}>
                        <View>
                            <Text style={styles.textoSuperior}>{estudio}</Text>
                            <Text style={styles.textoMedio}>{itemName}</Text>
                            <Text style={styles.textoInferior}>{titulo}</Text>
                        </View>
                        <Image style={styles.imagem} source={imagem} />
                    </View>
                    <Text>{itemDesc}</Text>
                    <View style={styles.rodape}>
                        <Text style={styles.moeda}>R${preco}</Text>
                        <Botao 
                            titulo={'COMPRAR'} 
                            onPress={() => {
                                adicionarItem({
                                    estudio,
                                    itemName,
                                    titulo,
                                    id,
                                    imagem,
                                    preco,
                                });
                                navigation.push('Checkout');
                            }}
                        />
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        flex: 4,    
        marginTop: -60,
    },
    itemPosicao: {
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
    },
    item: {
        backgroundColor: '#fff',
        borderRadius: 30,
        padding: 28,
        width: '80%',
        elevation: 4,
    },
    textoPosicao: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    imagem: {
        width: 30,
        height: 72,
    },
    textoSuperior: {
        fontSize: 16,
        fontWeight: '900',
        color: '#000',
        marginBottom: 4,
    },
    textoMedio: {
        fontSize: 20,
        fontWeight: '900',
        color: '#000',
        marginBottom: 4,
    },
    textoInferior: {
        fontSize: 14,
        fontWeight: '900',
        color: '#CACACA',
        marginBottom: 12,
    },
    rodape: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
    },
    moeda: {
        fontWeight: '900',
        fontSize: 20,
        color: '#000',
    },
});
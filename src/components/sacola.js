import React from "react";
import {View, Image, StyleSheet, Text} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {TouchableOpacity} from "react-native-gesture-handler";
import {useContext} from "react";
import {DataContext} from '../provider';

export const Sacola = () => {
    const navigation = useNavigation();
    const {itensCheckout} = useContext(DataContext);
    return (
        <TouchableOpacity onPress={() => navigation.push('Checkout')}>
            <View style={styles.containerSacola}>
                <Image 
                    source={require('../assets/images/icone-sacola.png')} 
                    style={styles.imagem} 
                />
                {itensCheckout.length > 0 ? (
                    <View style={styles.containerQuantidade}>
                        <Text style={styles.textoQuantidade}>
                            {itensCheckout.reduce(
                                (acumulado, atual) => acumulado + atual.quantidade, 0,
                            )}
                        </Text>
                    </View>
                ) : null}
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    containerSacola: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 50,
    },
    imagem: {
        height: 30,
        width: 30,
    },
    containerQuantidade: {
        backgroundColor: '#FF0000',
        borderRadius: 100,
        marginTop: -22,
        marginLeft: 11,
    },
    textoQuantidade: {
        textAlign: 'center',
        padding: 4,
        fontSize: 10,
        color: '#FFF'
    }
});
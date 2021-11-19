import React, {useContext} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {DataContext} from '../../provider';
import {Botao} from '../../components/botao'
import {TouchableOpacity} from 'react-native-gesture-handler';
import {CheckoutItem} from './checkoutItem';
import {useNavigation} from '@react-navigation/native';

export const Checkout = () => {
    const {itensCheckout} = useContext(DataContext);
    const navigation = useNavigation();

    const valorTotal = itensCheckout.reduce(
        (acumulado, atual) => acumulado + atual.quantidade * atual.preco, 0
    )

    const Titulo = ({children}) => <Text style={styles.titulo}>{children}</Text>
    const Total = ({children}) => <Text style={styles.total}>{children}</Text>
    return(
        <View style={styles.container}>
            <Titulo>Checkout</Titulo>
            {itensCheckout.map((item) => (
                <CheckoutItem {...item} />
            ))}
            <Text style={styles.total}>R${valorTotal}</Text>
            <Botao titulo={'FINALIZAR COMPRA'} />
            <TouchableOpacity onPress={() => navigation.push('ListaProdutos')}>
                <Text style={styles.continuarTexto}>Continuar comprando</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 24,
    },
    titulo: {
        fontWeight: '900',
        fontSize: 22,
        color: '#000',
        marginBottom: 10,
    },
    total: {
        fontWeight: '900',
        fontSize: 18,
        marginVertical: 36,
        color: '#000',
    },
    continuarTexto: {
        fontWeight: '900',
        fontSize: 16,
        color: '#4287f5',
        marginTop: 20,
        textAlign: 'center',
    },
});
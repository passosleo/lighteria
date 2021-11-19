import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export const Botao = ({titulo, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.botaoContainer}>
        <Text style={styles.botaoTexto}>{titulo}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  botaoContainer: {
    backgroundColor: '#4287f5',
    padding: 20,
    borderRadius: 6,
  },
  botaoTexto: {
    fontWeight: '900',
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
  },
});

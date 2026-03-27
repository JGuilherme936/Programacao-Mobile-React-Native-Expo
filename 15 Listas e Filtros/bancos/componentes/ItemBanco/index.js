import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

export default function ItemBanco({codigo, nome}) {
  return (
    <View style={styles.Item}>
      <Text style={styles.Ano}>{codigo}</Text>
      <Text style={styles.Texto}>{nome}</Text>
    </View>
  );
}

import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

export default function ItemCarro({ano, marca, modelo}) {
  return (
    <View style={styles.Item}>
      <Text style={styles.Ano}>{ano}</Text>
      <Text style={styles.Texto}>{marca} - {modelo}</Text>
    </View>
  );
}

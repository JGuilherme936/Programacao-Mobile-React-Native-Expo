import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, SafeAreaView, Image, Alert } from 'react-native';
import axios from 'axios';

export default function App() {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);

  async function buscarUsuario() {
    if (!username) return;
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      setUser(response.data);
    } catch (error) {
      Alert.alert("Erro", "Usuário não encontrado");
      setUser(null);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Busca Perfil GitHub</Text>
      <TextInput style={styles.input} placeholder="Digite o username" value={username} onChangeText={setUsername} autoCapitalize="none" />
      <Button title="Buscar" onPress={buscarUsuario} />
      {user && (
        <View style={styles.resultado}>
          <Image source={{ uri: user.avatar_url }} style={styles.avatar} />
          <Text style={styles.nome}>{user.name || user.login}</Text>
          <Text style={styles.bio}>{user.bio}</Text>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  titulo: { fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10, borderRadius: 5 },
  resultado: { marginTop: 20, alignItems: 'center' },
  avatar: { width: 100, height: 100, borderRadius: 50, marginBottom: 10 },
  nome: { fontSize: 18, fontWeight: 'bold' },
  bio: { textAlign: 'center', color: '#666', marginTop: 5 }
});

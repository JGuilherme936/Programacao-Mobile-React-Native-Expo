import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, SafeAreaView, Image, Alert } from 'react-native';
import axios from 'axios';

export default function App() {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);

  // A função assíncrona moderna e limpa
  async function buscarUsuario() {
    if (username.trim() === '') {
      Alert.alert("Aviso", "Digite um nome de usuário!");
      return;
    }
    
    try {
      // O 'await' pausa a execução aqui até o GitHub responder
      const response = await axios.get(`https://api.github.com/users/${username}`);
      setUser(response.data);
    } catch (error) {
      Alert.alert("Erro", "Usuário não encontrado no GitHub.");
      setUser(null);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Perfil GitHub</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Digite o username do GitHub..."
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
      />
      
      <Button title="Buscar Perfil" onPress={buscarUsuario} color="#24292e" />

      {/* Só exibe este bloco se a API retornar um usuário válido */}
      {user && (
        <View style={styles.resultado}>
          <Image source={{ uri: user.avatar_url }} style={styles.avatar} />
          <Text style={styles.nome}>{user.name || user.login}</Text>
          <Text style={styles.bio}>{user.bio || "Este usuário não possui bio."}</Text>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20, 
    backgroundColor: '#fff', 
    justifyContent: 'center' 
  },
  titulo: { 
    fontSize: 26, 
    fontWeight: 'bold', 
    textAlign: 'center', 
    marginBottom: 20,
    color: '#24292e'
  },
  input: { 
    borderWidth: 1, 
    borderColor: '#ccc', 
    padding: 12, 
    marginBottom: 15, 
    borderRadius: 8, 
    fontSize: 16 
  },
  resultado: { 
    marginTop: 40, 
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f6f8fa',
    borderRadius: 10,
    elevation: 3
  },
  avatar: { 
    width: 130, 
    height: 130, 
    borderRadius: 65, 
    marginBottom: 15,
    borderWidth: 3,
    borderColor: '#24292e'
  },
  nome: { 
    fontSize: 22, 
    fontWeight: 'bold', 
    marginBottom: 8,
    color: '#24292e'
  },
  bio: { 
    textAlign: 'center', 
    color: '#586069', 
    fontSize: 16 
  }
});

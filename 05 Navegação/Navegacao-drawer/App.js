import React, { useState, useRef } from 'react';
import { Text, View, Image, TouchableOpacity, Animated, StatusBar, Pressable } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import estilo from './componentes/estilo';

// 1. Definição das Telas (Movido para fora para limpar o código)
const telas = {
  Home: {
    titulo: 'Pokédex 1ª Geração',
    corpo: (
      <View style={estilo.containerScreen}>
      <Image source={require('./assets/capa.png')} style={estilo.capa} resizeMode="contain" />
      <Text style={estilo.titulo}>Página Inicial</Text>
      <Text style={{textAlign: 'center'}}>Use o menu lateral para explorar os Pokémons iniciais.</Text>
      </View>
    )
  },
  Bulbasaur: {
    titulo: 'Bulbasaur #001',
    corpo: (
      <View style={estilo.containerScreen}>
      <Image source={require('./assets/bulbasaur.png')} style={estilo.capa} resizeMode="contain" />
      <Text style={estilo.titulo}>Bulbasaur</Text>
      <Text>Tipo: Planta / Venenoso</Text>
      </View>
    )
  },
  Squirtle: {
    titulo: 'Squirtle #007',
    corpo: (
      <View style={estilo.containerScreen}>
      <Image source={require('./assets/squirtle.png')} style={estilo.capa} resizeMode="contain" />
      <Text style={estilo.titulo}>Squirtle</Text>
      <Text>Tipo: Água</Text>
      </View>
    )
  },
  Charmander: {
    titulo: 'Charmander #004',
    corpo: (
      <View style={estilo.containerScreen}>
      <Image source={require('./assets/charmander.png')} style={estilo.capa} resizeMode="contain" />
      <Text style={estilo.titulo}>Charmander</Text>
      <Text>Tipo: Fogo</Text>
      </View>
    )
  }
};

// 2. Componente com a Lógica (Onde o insets agora funciona)
function AppConteudo() {
  const [telaAtiva, setTelaAtiva] = useState('Home');
  const [menuAberto, setMenuAberto] = useState(false);
  const insets = useSafeAreaInsets(); // Agora ele encontra o Provider acima dele

  const animacaoMenu = useRef(new Animated.Value(-400)).current;

  const toggleMenu = () => {
    const paraOnde = menuAberto ? -400 : 0;
    Animated.spring(animacaoMenu, {
      toValue: paraOnde,
      useNativeDriver: false,
      friction: 8,
    }).start();
    setMenuAberto(!menuAberto);
  };

  const navegar = (nomeTela) => {
    toggleMenu();
    setTimeout(() => {
      setTelaAtiva(nomeTela);
    }, 100);
  };

  return (
    <View style={estilo.containerApp}>
    <StatusBar barStyle="light-content" backgroundColor="#cc0000" />

    {/* --- HEADER --- */}
    <View style={[estilo.header, { paddingTop: insets.top, height: 70 + insets.top }]}>
    <TouchableOpacity style={[estilo.headerIconLeft, {top: insets.top + 10}]} onPress={toggleMenu}>
    <Text style={{color: '#fff', fontSize: 32, fontWeight: 'bold'}}>☰</Text>
    </TouchableOpacity>
    <Text style={[estilo.headerTitle, {marginTop: 10}]}>{telas[telaAtiva].titulo}</Text>
    </View>

    {/* --- OVERLAY --- */}
    {menuAberto && <Pressable style={estilo.overlay} onPress={toggleMenu} />}

    {/* --- DRAWER --- */}
    <Animated.View style={[estilo.drawer, { left: animacaoMenu }]}>
    <View style={{ paddingTop: insets.top + 30 }}>
    {Object.keys(telas).map((key) => (
      <TouchableOpacity key={key} style={estilo.menuItem} onPress={() => navegar(key)}>
      <Text style={estilo.menuText}>{key === 'Home' ? 'Início' : key}</Text>
      </TouchableOpacity>
    ))}
    </View>
    </Animated.View>

    {/* --- CONTEÚDO --- */}
    {telas[telaAtiva].corpo}
    </View>
  );
}

// 3. Componente Raiz (O Provedor no topo)
export default function App() {
  return (
    <SafeAreaProvider>
    <AppConteudo />
    </SafeAreaProvider>
  );
}

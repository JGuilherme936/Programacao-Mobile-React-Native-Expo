# 📱 Programação de Dispositivos Móveis | Aplicações com React Native / Expo 55

[![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactnative.dev/)
[![Expo](https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white)](https://expo.dev/)
[![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)](https://axios-http.com/)
[![CachyOS](https://img.shields.io/badge/CachyOS-000000?style=for-the-badge&logo=linux)](https://cachyos.org/)

Repositório central contendo **mais de 60 atividades práticas e avaliativas** desenvolvidas durante o 1º bimestre da disciplina de **Dispositivos Móveis**.

Os projetos documentam a progressão de aprendizado saindo do zero absoluto em interface de usuário até a arquitetura avançada de consumo assíncrono de APIs REST.

## 👨‍💻 Autor e Instituição

- **Desenvolvedor:** [João Guilherme Azevedo Barros](https://github.com/jguilherme936)
- **Curso:** Engenharia da Computação (6º Período)
- **Instituição:** [Universidade CEUMA](https://github.com/ditceuma)

## 🏗️ Metodologia e Arquitetura do Projeto

Para suportar o volume de mais de 60 aplicativos desenvolvidos e testados em dispositivo físico via _Expo Go_, regras estritas de arquitetura foram estabelecidas:

1. **Estabilidade de Ambiente:** Fixação da versão **Expo SDK 55** em todos os projetos para anular conflitos de "TurboModule" e garantir compatibilidade nativa no Linux (CachyOS/Arch).
2. **Componentização Padrão:** Separação estrita de responsabilidades. Cada componente ou tela possui sua própria pasta contendo a lógica (`index.js`) separada do visual (`estilos.js`).
3. **Safe Area Global:** Implementação rigorosa do `SafeAreaProvider` e do hook `useSafeAreaInsets` para evitar sobreposição de UI com os entalhes e barras de status dos smartphones modernos.
4. **Isolamento de Lógica de Rede:** No consumo de APIs, a lógica de requisição HTTP (ViaCEP, GitHub API) e tratamento de erros foi isolada em uma camada de "Serviços", mantendo as Views (UI) limpas e reativas.

## 📁 Estrutura do Repositório (Trilha de Aprendizado)

Clique em qualquer módulo abaixo para ser redirecionado aos projetos específicos:

1. [**Introdução:**](./01%20Introdução) Fundamentos de JSX e ecossistema Expo.
2. [**Exibição de Imagens:**](./02%20Exibição%20de%20Imagens%20no%20Aplicativo) Componente `Image` e otimização de assets locais e remotos.
3. [**Estilização Básica:**](./03%20Estilização%20Básica) Objeto `StyleSheet`, tipografia, cores e alinhamentos.
4. [**Criando Componentes:**](./04%20Criando%20Componente) Modularização de código, export/import e reaproveitamento estrutural.
5. [**Navegação:**](./05%20Navegação) Roteamento inicial e transição entre telas.
6. [**Containers:**](./06%20Containers) Domínio sobre `View`, `ScrollView`, `ImageBackground` e `Pressable`.
7. [**Tab Navigation:**](./07%20Tab%20Navigation) Implementação de navegação por abas inferiores com ícones personalizados.
8. [**Estilizando com Flexbox:**](./08%20Estilizando%20com%20Flexbox) Construção de layouts responsivos e distribuição inteligente de eixos.
9. [**Props:**](./09%20Props) Parametrização dinâmica e passagem de dados entre componentes pais e filhos.
10. [**Variáveis de Estado:**](./10%20Variaveis%20de%20Estado) Gerenciamento de reatividade na interface utilizando o hook `useState`.
11. [**TextInput:**](./11%20TextInput) Captura interativa de dados do usuário e manipulação de formulários.
12. [**Stack Navigation:**](./12%20Stack%20Navigation) Navegação em pilha profunda mantendo o histórico de rotas.
13. [**Deploy:**](./13%20Deploy) Preparação, otimização e geração de builds (APK/AAB).
14. [**Funções e Cálculos:**](./14%20Funcoes%20e%20Calculos) Lógica de negócio aplicada (Calculadoras de Juros, Jogo da Velha com matrizes, Trivia).
15. [**Listas e Filtros:**](./15%20Listas%20e%20Filtros) Renderização dinâmica iterando com `.map()` e busca em tempo real com `.filter()`.
16. [**Consumo de APIs de Terceiros:**](./16%20Consumo%20de%20APIs%20de%20Terceiros) Integração com ecossistema web utilizando **Axios**. Implementação do padrão REST, tratamento de códigos HTTP, uso de Promises e blocos `async/await` (Buscador ViaCEP, Perfis do GitHub e Random Dog API).

---

_Repositório acadêmico automatizado e gerenciado via terminal Linux._

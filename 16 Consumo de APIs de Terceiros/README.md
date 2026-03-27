# 🌐 Módulo 16: Consumo Assíncrono de APIs REST

[![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactnative.dev/)
[![Expo](https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white)](https://expo.dev/)

## 🧠 Sobre o Módulo e Decisões Arquiteturais

O clímax do desenvolvimento front-end mobile: integração com a web. Uso do **Postman** para validação prévia de _endpoints_. Substituição de fluxos síncronos por Promises assíncronas utilizando a biblioteca **Axios** e a sintaxe `async/await`. Tratamento robusto de _status codes_ HTTP e renderização de payloads JSON (ViaCEP e GitHub Users).

## 📁 Projetos Desenvolvidos

- aula16-apis-ufs (Arquitetura em camadas: Serviços, UI e Tratamento de Erro)
- aula16-api-assicrona (ViaCEP)
- aula16-api-assicrona2 (GitHub API)
- aula16-api-assicrona3 (Dog API)

## ⚙️ Ambiente e Execução

Este ecossistema foi desenvolvido e homologado em ambiente Linux (**CachyOS/Arch**). Para garantir a estabilidade do _TurboModule_ e compatibilidade nativa, todos os projetos utilizam estritamente o **Expo SDK 55**.

Para testar localmente:

```bash
# 1. Acesse o diretório do projeto desejado
cd "nome-do-projeto"

# 2. Restaure as dependências (Node Modules)
npm install

# 3. Inicialize o empacotador do Expo na rede local
npx expo start --lan
```

---

_Desenvolvido por [João Guilherme](https://github.com/jguilherme936) | Engenharia da Computação (6º Período) - [CEUMA](https://github.com/ditceuma)_

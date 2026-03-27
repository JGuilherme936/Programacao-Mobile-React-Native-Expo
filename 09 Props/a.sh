#!/bin/bash
cd ~/Code/edilson/GigaEdilsonecho "🧹 Iniciando a padronização e limpeza dos nomes dos projetos..."# Definindo as pastas gerais alvo (do 9 ao 14)

pastas=(

  "9 Props"

  "10 Variaveis de Estado"

  "11 TextInput"

  "12 Stack Navigation"

  "13 Deploy"

  "14 Funcoes e Calculos"

)# Loop passando por cada pastafor pasta in "${pastas[@]}"; do

  # Verifica se a pasta existe e entra nela

  if [ -d "$pasta" ]; then

    cd "$pasta"

echo "🧹 Iniciando a remoção do prefixo 'aulaX-' dos projetos..."


for pasta in aula*; do

  # Verifica se o item é realmente um diretório

  if [ -d "$pasta" ]; then

    # Remove tudo desde o início até o primeiro traço (ex: aula14-jogo-velha vira jogo-velha)

    novo_nome="${pasta#*-}"



    # Renomeia a pasta se o novo nome for diferente

    if [ "$pasta" != "$novo_nome" ]; then

      mv "$pasta" "$novo_nome"

      echo "✅ Renomeado: $pasta ➡️  $novo_nome"

    fi

  fi

done


cd ..

  fi

done


echo "🎉 Limpeza concluída!"

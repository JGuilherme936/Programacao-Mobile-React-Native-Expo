export function verificarGanhador(tabuleiro) {
  const linhasVitoria = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Linhas
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Colunas
    [0, 4, 8], [2, 4, 6]             // Diagonais
  ];

  for (let i = 0; i < linhasVitoria.length; i++) {
    const [a, b, c] = linhasVitoria[i];
    if (tabuleiro[a] && tabuleiro[a] === tabuleiro[b] && tabuleiro[a] === tabuleiro[c]) {
      return tabuleiro[a]; // Retorna 'X' ou 'O'
    }
  }

  if (!tabuleiro.includes("")) {
    return "Empate";
  }

  return null;
}

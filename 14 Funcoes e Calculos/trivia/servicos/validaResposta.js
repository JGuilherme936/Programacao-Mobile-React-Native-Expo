export default function validaResposta(resposta) {
  const respostaLimpa = resposta.trim().toLowerCase();
  if (respostaLimpa === "brasília" || respostaLimpa === "brasilia") {
    return "Resposta Correta! 🎉";
  } else {
    return "Resposta Incorreta! ❌";
  }
}

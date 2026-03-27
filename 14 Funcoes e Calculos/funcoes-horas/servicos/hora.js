export default function retornaHora() {
  const dataHora = new Date();
  // Adicionei um padStart para os minutos sempre terem dois dígitos (ex: 13:05 em vez de 13:5)
  const horas = dataHora.getHours();
  const minutos = String(dataHora.getMinutes()).padStart(2, '0');
  const horaAtual = horas + ":" + minutos;
  return horaAtual;
}

export default function servico_calculaData(dias){
  let dataFinal = new Date();
  dataFinal.setDate(dataFinal.getDate() + parseInt(dias));
  return dataFinal;
}

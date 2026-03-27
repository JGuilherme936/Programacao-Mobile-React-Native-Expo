export default function servico_formataData(data){
  return data.getDate() + "/" + (data.getMonth() + 1) + "/" + data.getFullYear();
}

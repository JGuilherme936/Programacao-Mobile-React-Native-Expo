import { bancos } from "../dados/bancos";

export function retornaBancos() {
  return bancos;
}

export function buscaBanco(termoDigitado) {
  return bancos.filter((banco) => 
    banco.nome.toLowerCase().includes(termoDigitado.toLowerCase())
  );
}

import { carros } from "../dados/carros";

export default function filtraCarroMarca(marca) {
  return carros.filter((carro) => carro.marca === marca);
}

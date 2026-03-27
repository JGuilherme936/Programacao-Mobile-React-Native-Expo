export const calcularSimples = (capital, taxa, tempo) => {
  const i = parseFloat(taxa) / 100;
  const c = parseFloat(capital);
  const t = parseFloat(tempo);
  return (c + c * i * t).toFixed(2);
};

export const calcularComposto = (capital, taxa, tempo) => {
  const i = parseFloat(taxa) / 100;
  const c = parseFloat(capital);
  const t = parseFloat(tempo);
  return (c * Math.pow(1 + i, t)).toFixed(2);
};

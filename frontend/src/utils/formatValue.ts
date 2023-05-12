const formatValue = (value: number) => {
  value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });
  return value;
};
export default formatValue;

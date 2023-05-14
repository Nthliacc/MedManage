const formatValue = (value: number) => {
  if (value === 0 || !value) return 'R$ 0,00';
  value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });
  return value;
};
export default formatValue;

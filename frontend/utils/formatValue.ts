const formatValue = (value: number) => {
  if (value === 0 || !value) return 'R$ 0,00';
  const currency = value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });
  return currency;
};
export default formatValue;

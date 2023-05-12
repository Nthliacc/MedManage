const formatDate = (date: string) => {
  const newDate = new Date(date);
  return newDate.toLocaleDateString('pt-BR');
};

export default formatDate;

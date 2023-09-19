const formatCurrency = (value, currency) => value.toLocaleString('pt-br', { style: 'currency', currency });

export default formatCurrency;

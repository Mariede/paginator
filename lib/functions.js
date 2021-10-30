'use strict';

// -------------------------------------------------------------------------
// Modulos de inicializacao
const { format, isValid, parse } = require('date-fns');
// -------------------------------------------------------------------------

// -------------------------------------------------------------------------
// Modulos de apoio

// -------------------------------------------------------------------------

// -------------------------------------------------------------------------
// Formata uma data valida de acordo com o parametro de entrada
//	retorna o proprio valor de entrada se value nao for um objeto/data
const formatDateToString = (value, formatStyle = 'dd/MM/yyyy HH:mm:ss') => {
	if (value instanceof Date) {
		return format(value, formatStyle); // Retorna string
	}

	return value;
};

// Tenta formatar um valor em uma data valida de acordo com o parametro de entrada
//	retorna o proprio valor de entrada se data invalida
const formatStringToDate = (value, formatStyle = 'dd/MM/yyyy HH:mm:ss') => {
	if (typeof value === 'string') {
		const date = parse(
			value,
			formatStyle,
			new Date()
		);

		if (isValid(date)) {
			return date; // Retorna object/Date
		}
	}

	return value;
};
// -------------------------------------------------------------------------

module.exports = {
	formatDateToString,
	formatStringToDate
};

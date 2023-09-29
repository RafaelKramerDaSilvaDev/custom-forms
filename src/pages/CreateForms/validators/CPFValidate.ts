export function CPFValidate(cpf: string): boolean {
	// Verifica se o CPF tem exatamente 11 caracteres e se todos são numéricos
	if (cpf.length !== 11 || !/^\d{11}$/.test(cpf)) {
		return false;
	}

	// Lista de CPFs inválidos que passariam pela validação matemática
	const blackList = [
		'00000000000',
		'11111111111',
		'22222222222',
		'33333333333',
		'44444444444',
		'55555555555',
		'66666666666',
		'77777777777',
		'88888888888',
		'99999999999',
	];
	if (blackList.includes(cpf)) {
		return false;
	}

	// Função para calcular o dígito
	const calculateDigit = (start: number, end: number) => {
		let sum = 0;
		let factor = end + 2;
		for (let i = start; i <= end; i++) {
			sum += parseInt(cpf.charAt(i)) * factor--;
		}
		let result = sum % 11;
		return result < 2 ? 0 : 11 - result;
	};

	// Verifica os dois dígitos verificadores
	const firstDigit = calculateDigit(0, 8);
	if (firstDigit !== parseInt(cpf.charAt(9))) {
		return false;
	}

	const secondDigit = calculateDigit(0, 9);
	if (secondDigit !== parseInt(cpf.charAt(10))) {
		return false;
	}

	return true;
}

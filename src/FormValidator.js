import validator from 'validator';

export default class FormValidator {
	constructor(validacoes) {
		this.validacoes = validacoes;
	}

	validation(state) {
		let validacao = this.validForm();

		this.validacoes.forEach((regra) => {            
			const campoValor = state[regra.campo];
            const args = regra.args || [];
            const metodoValidacao = typeof regra.metodo === 'string' ? validator[regra.metodo] : regra.metodo;

			if (metodoValidacao(campoValor, ...args, state) !== regra.validoQuando) {
				validacao[regra.campo] = {
                    isInvalid: true,
                    message: regra.mensagem
                }

                validacao.isValid = false;
			}
        });
        
        return validacao;
	}

	validForm() {
		const validacao = {};

		this.validacoes.map((regra) => (validacao[regra.campo] = { isInvalid: false, message: '' }));

		return { isValid: true, ...validacao };
	}
}

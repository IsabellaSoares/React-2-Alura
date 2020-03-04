import validator from 'validator';

export default class FormValidator {
	constructor(validations) {
		this.validations = validations;
	}

	validation(state) {
		let validation = this.validForm();

		this.validations.forEach((rule) => {            
			const fieldValue = state[rule.field];
            const args = rule.args || [];
            const validationMethod = typeof rule.method === 'string' ? validator[rule.method] : rule.method;

			if (validationMethod(fieldValue, ...args, state) !== rule.validWhen) {
				validation[rule.field] = {
                    isInvalid: true,
                    message: rule.message
                }

                validation.isValid = false;
			}
        });
        
        return validation;
	}

	validForm() {
		const validation = {};

		this.validations.map((rule) => (validation[rule.field] = { isInvalid: false, message: '' }));

		return { isValid: true, ...validation };
	}
}

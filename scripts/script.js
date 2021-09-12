const $nameInput = document.querySelector('.form__inputs__item.name');
const $nameError = document.querySelector('.form__inputs__error.name');
const $lastNameInput = document.querySelector('.form__inputs__item.last-name');
const $lastNameError = document.querySelector('.form__inputs__error.last-name');
const $emailInput = document.querySelector('.form__inputs__item.email');
const $emailError = document.querySelector('.form__inputs__error.email');
const $passwordInput = document.querySelector('.form__inputs__item.password');
const $passwordError = document.querySelector('.form__inputs__error.password');
const $submitButton = document.querySelector('.form__inputs__button');
const emailRegex =
	/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

$submitButton.addEventListener('click', event => {
	let errorCounter = 0;
	if ($nameInput.value === '') {
		$nameError.classList.add('active');
		$nameInput.classList.add('active');
		errorCounter++;
	} else {
		$nameError.classList.remove('active');
		$nameInput.classList.remove('active');
	}
	if ($lastNameInput.value === '') {
		$lastNameError.classList.add('active');
		$lastNameInput.classList.add('active');
		errorCounter++;
	} else {
		$lastNameError.classList.remove('active');
		$lastNameInput.classList.remove('active');
	}
	if (!emailRegex.test($emailInput.value)) {
		$emailError.classList.add('active');
		$emailInput.classList.add('active');
		errorCounter++;
	} else {
		$emailError.classList.remove('active');
		$emailInput.classList.remove('active');
	}
	if ($passwordInput.value === '') {
		$passwordError.classList.add('active');
		$passwordInput.classList.add('active');
		errorCounter++;
	} else {
		$passwordError.classList.remove('active');
		$passwordInput.classList.remove('active');
	}
	if (!errorCounter) {
		$nameInput.value = '';
		$lastNameInput.value = '';
		$emailInput.value = '';
		$passwordInput.value = '';
	}
});

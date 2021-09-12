const $nameInput = document.querySelector('.form__inputs__item.name');
const $nameError = document.querySelector('.form__inputs__error.name');
const $lastNameInput = document.querySelector('.form__inputs__item.last-name');
const $lastNameError = document.querySelector('.form__inputs__error.last-name');
const $emailInput = document.querySelector('.form__inputs__item.email');
const $emailError = document.querySelector('.form__inputs__error.email');
const $passwordInput = document.querySelector('.form__inputs__item.password');
const $passwordError = document.querySelector('.form__inputs__error.password');
const $submitButton = document.querySelector('.form__inputs__button');

$submitButton.addEventListener('click', event => {
	if ($nameInput.value === '') {
		$nameError.classList.add('active');
	}
});

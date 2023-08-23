let nameInput = document.querySelector('input[type="text"]');
let emailInput = document.querySelector('input[type="email"]');
let passwordInput = document.querySelector('input[type="password"]');
let button = document.querySelector('button');
let container = document.querySelector('.container');
let modal = document.querySelector('.modal');
let modalIcon = document.querySelector('.fa-solid');
let modalContent = document.querySelector('.modalContent');

const buttonWidth = button.offsetWidth;
const containerWidth = container.offsetWidth;
const maxWidth = containerWidth - buttonWidth;

let nameRegex = /^[A-Za-z]{3,}.*$/;
let emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
let passwordRegex = /^(?=.*[A-Za-z0-9]).{8,}$/;

function validate(regex, element) {
    if (regex.test(element.value)) {
        element.classList.add('valid');
        element.classList.remove('invalid');
    } else {
        element.classList.add('invalid');
        element.classList.remove('valid');
    }
}

nameInput.addEventListener('input', () => {
    validate(nameRegex, nameInput)
})

emailInput.addEventListener('input', () => {
    validate(emailRegex, emailInput)
})

passwordInput.addEventListener('input', () => {
    validate(passwordRegex, passwordInput)
})

button.addEventListener('click', (e ) => {
    e.preventDefault();
})

button.addEventListener('mouseenter', () => {
    if (nameInput.classList.contains('invalid') || emailInput.classList.contains('invalid') || passwordInput.classList.contains('invalid')) {
        const randomLeft = Math.floor(Math.random() * (maxWidth + 1));
        button.style.left = `${Math.min(randomLeft, maxWidth - buttonWidth - 100)}px`;
        button.classList.add('bg-invalid')
    } else {
        button.style.cursor = 'pointer';
        let modalContentText = document.createTextNode(`Hello ${nameInput.value}`);
        modalContent.append(modalContentText);
        button.classList.remove('bg-invalid')
    }
});

button.addEventListener('click', () => {
    container.classList.add('d-none');
    modal.classList.remove('d-none');
})

modalIcon.addEventListener('click', modalNotDisplaying)
window.addEventListener('keyup', (e) => {
    if (e.key === 'Escape') {
        modalNotDisplaying()
    }
})

window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        modalNotDisplaying()
    }
})

function modalNotDisplaying() {
    container.classList.remove('d-none');
    modal.classList.add('d-none');
}
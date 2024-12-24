const form = document.getElementById('myForm');
const formElements = form.querySelectorAll('input, textarea');

form.addEventListener('submit', (event) => {
    let isValid = true;
    event.preventDefault();

    formElements.forEach((element) => {
        const error = element.parentNode.querySelector('.error-message')

        if (error) {
            error.textContent = '';
        }

        element.classList.remove('input-error');

        if (element.type === 'text' || element.type === 'email' || element.tagName === 'TEXTAREA') {
            if (!element.value.trim()) {
                showError(element, 'This field is required.');
                element.classList.add('input-error');
                isValid = false;
            }
        }
    });

    const checkbox = form.querySelector('input[type="checkbox"]');
    const checkboxError = document.getElementById('checkboxError');

    if (!checkbox.checked) {
        checkboxError.style.display = 'block';
        checkboxError.textContent = 'To submit this form, please consent to being contacted';
        isValid = false;
    } else {
        checkboxError.style.display = 'none';
    }

    const radios = form.querySelectorAll('input[name="options"]');
    const radioError = document.getElementById('radioError');

    if (![...radios].some((radio) => radio.checked)) {
        radioError.style.display = 'block';
        radioError.style.marginBottom = '0.8rem';
        radioError.textContent = 'Please select a query type.';
        isValid = false;
    } else {
        radioError.style.display = 'none';
    }

    if (isValid) {
        form.reset();
        alert('Form submitted');
    }

    function showError(element, message) {
        const error = element.parentNode.querySelector('.error-message');

        if (error) {
            error.textContent = message;
        }
    }
});
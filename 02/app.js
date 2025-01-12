document.addEventListener('DOMContentLoaded', init);

function init() {
    const clickEl = document.querySelector('.error--click');
    const enterEl = document.querySelector('.error--enter');


    setRandomPosition(clickEl);
    setRandomPosition(enterEl);

    initEventWithError(clickEl, 'click', new RangeError('Błąd zakresu!'));
    initEventWithError(enterEl, 'mouseenter', new TypeError('Błąd typu!'));

}

function setRandomPosition(element, error = null) {
    const alertElement = document.querySelector('.alert');
    const alertMessage = alertElement.querySelector('.alert__message');

    try {
        if(error) {
            throw error;
        }

        element.style.top = Math.random() * 600 + 'px';
        element.style.left = Math.random() * 800 + 'px';
    } catch (error) {
        renderError(error.message);
    }

    function renderError(message) {
        alertElement.classList.remove('alert--hidden');
        alertMessage.textContent = message;

        alertElement.addEventListener('click', hideError);
    }

    function hideError(e) {
        if(e.target === e.currentTarget) {
            alertElement.classList.add('alert--hidden');
            alertMessage.textContent = '';

            alertElement.removeEventListener('click', hideError);
        }
    }
}

function initEventWithError(element, eventName, error) {
    element.addEventListener(eventName, function() {
        setRandomPosition(this, error);
    })
}

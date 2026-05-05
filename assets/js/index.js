

window.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('#js-year')) {
        const year = new Date().getFullYear();
        document.querySelector('#js-year').textContent = year;
    }

    console.log('DOM fully loaded and parsed');
});
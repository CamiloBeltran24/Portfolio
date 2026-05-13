

window.addEventListener('DOMContentLoaded', () => {


    if (document.querySelector('#js-year')) {
        const year = new Date().getFullYear();
        document.querySelector('#js-year').textContent = year;
    }

    console.log('DOM fully loaded and parsed');


    /*
    Burguer Menu
    */
    if (document.querySelector('#js-menu')) {
        let burgerMenu = document.querySelector('#js-menu');
        let navigation = document.querySelector('.header__nav');

        burgerMenu.addEventListener('click', (e) => {
            if (!navigation) return

            navigation.classList.toggle('active');
        })
    }

    if (document.getElementById("contact-form")) {


        let form = document.getElementById("contact-form");
        let inputsCollection = form.querySelectorAll('input, textarea');

        inputsCollection.forEach(input => {

            input.addEventListener('focus', (e) => {
                console.log(e.target);
                e.target.classList.add('focus')
                console.log(e.target.value.length)
            })

            input.addEventListener('blur', (e) => {
                console.log(e.target);
                if (!e.target.value.length) {
                    e.target.classList.remove('focus')
                }
                console.log(e.target.value.length)
            })
        })



        const button = document.getElementById("submit-button");
        const responseMessage = document.getElementById("response-message");

        form.addEventListener("submit", async function (event) {

            event.preventDefault();

            button.disabled = true;
            button.innerText = "Sending...";

            const data = new FormData(event.target);

            try {
                const response = await fetch(event.target.action, {
                    method: 'POST',
                    body: data,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    form.style.display = "none";
                    responseMessage.style.display = "block";
                } else {
                    const errorData = await response.json();
                    alert("Hubo un problema: " + errorData.errors.map(e => e.message).join(", "));
                    button.disabled = false;
                    button.innerText = "Send Message";
                }
            } catch (error) {
                alert("Error de red. Por favor, verifica tu conexión.");
                button.disabled = false;
                button.innerText = "Send Message";
            }
        });

    }
});
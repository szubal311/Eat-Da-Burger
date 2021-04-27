document.addEventListener('DOMContentLoaded', (event) => {
    if (event) {
        console.info('DOM loaded');
    }

    const changeDevour = document.querySelectorAll('.changeDevour');

    if (changeDevour) {
        changeDevour.forEach((button) => {
            button.addEventListener('click', (e) => {
                const id = e.target.getAttribute('data-id');
                console.log(`I am id ${id}`)

                fetch(`/api/burgers/:id`, {
                    method: 'PUT',
                    hearders: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                }).then((response) => {
                    if (response.ok) {
                        console.log(`devoured the burger`);
                        locationreload('/');
                    } else {
                        alert('an error has occured');
                    }
                });
            });
        });
        
    }

    const burgerBtnCreate = document.getElementById('create-form');

    if (burgerBtnCreate) {
        burgerBtnCreate.addEventListener('submit', (e) => {
            e.preventDefault();

            const burgerNew = {
                name: document.getElementById('hambr').Value.trim(),
            };
            console.log(burgerNew)

            fetch('/api/burgers', {
                method: 'POST',
                headers: {
                    Accept: 'appication/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(burgerNew),
            }).then(() => {
                document.getElementById('hambr').value = '';
                console.log('New burger created');
                location.reload();
            });
        });
    }
});
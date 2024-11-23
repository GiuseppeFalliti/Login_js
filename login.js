document.getElementById("submit").addEventListener("click", function (e) {
    e.preventDefault(); // Previene il comportamento predefinito del form

    // Ottieni i dati dal form
    const username = document.querySelector("input[name='UserName']").value;
    const password = document.querySelector("input[name='password']").value;

    // Invia i dati al server per la verifica
    fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username,
            password,
        }),
    }).then((response) => {
            if (response.ok) {
                // Reindirizza a una pagina successiva
                window.location.href = 'dashboard.html';
            } else {
                alert('Username o password errati!');
            }
        })
        .catch((error) => {
            console.error('Errore nella richiesta:', error);
        });
});
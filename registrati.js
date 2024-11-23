        document.getElementById("submit").addEventListener("click", function (e) {
        e.preventDefault(); // Previene l'invio predefinito del form

        // Ottieni i dati dal form
        const username = document.getElementById("username").value;
        const nome = document.getElementById("nome").value;
        const cognome = document.getElementById("cognome").value;
        const password = document.getElementById("password").value;
        const data = document.getElementById("data").value;

        // Invia i dati al server tramite fetch
        fetch('http://localhost:3000/registrati', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username,
                nome,
                cognome,
                password,
                data,
            }),
        }).then((response) => {
                if (response.ok) {
                    alert('Registrazione completata con successo!');
                    window.location.href = 'index.html'; // Reindirizza alla pagina di login
                } else {
                    alert('Errore durante la registrazione. Riprova!');
                }
            })
            .catch((error) => {
                console.error('Errore durante la richiesta:', error);
                alert('Errore di connessione al server!');
            });
    });


const express = require('express'); //framework che crea il server HTTP
const body = require('body-parser'); //dati della body delle rischieste HTTP in JSON
const mysql = require('mysql2'); //dabase.
const cors = require('cors'); //permette di fare richieste su domini diversi.

const app = express();
app.use(cors());
app.use(body.json()); //gestisce i dati JSON nel body delle richieste.

//Configurazione connessione al database
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'giuse',
    database: 'login_js',
});

//Connessione al database
conn.connect((err) => {
    if (err) {
        console.error('Errore nella connessione al database:', err.message);
        process.exit(1);
    }
    console.log('Connesso al database.');
});

//Endpoint per registrare un utente
app.post('/registrati', (req, res) => {
    console.log('Richiesta ricevuta:', req.body); // controllo debug cmd.
    const { username, nome, cognome, password, data } = req.body;

    // Query per inserire l'utente nel database
    const query = 'INSERT INTO utenti (username, nome, cognome, password, data) VALUES (?, ?, ?, ?, ?)';
    conn.query(query, [username, nome, cognome, password, data], (err, results) => {
        if (err) {
            console.error('Errore nell\'inserimento dei dati:', err.message);
            return res.status(500).send('Errore nel server');
        }
        res.status(200).send('Utente registrato correttamente');
    });
});


app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Query per verificare username e password
    const query = 'SELECT * FROM utenti WHERE username = ? AND password = ?';
    conn.query(query, [username, password], (err, results) => {
        if (err) {
            console.error('Errore nella query:', err.message);
            return res.status(500).send('Errore del server');
        }

        if (results.length > 0) {
            // Se l'utente è trovato
            res.status(200).send('Login effettuato con successo');
        } else {
            // Se non viene trovato nessun utente
            res.status(401).send('Credenziali errate');
        }
    });
});


// Avvia il server
app.listen(3000, () => {
    console.log('Server in ascolto su http://localhost:3000');
});

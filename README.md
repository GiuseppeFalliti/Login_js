# Progetto Login e Registrazione con Node.js, MySQL e JavaScript

Questo progetto implementa una funzionalità di login e registrazione utilizzando un server Express.js con un database MySQL. Include due pagine web: una per il login e una per la registrazione degli utenti. I dati degli utenti vengono memorizzati in un database MySQL e il server supporta la comunicazione tramite API RESTful.

## Funzionalità principali

- **Registrazione**: Gli utenti possono registrarsi fornendo un nome utente, nome, cognome, password e data di nascita. I dati vengono memorizzati nel database.
- **Login**: Gli utenti possono effettuare il login inserendo il nome utente e la password. Se le credenziali sono corrette, viene reindirizzato alla dashboard.
- **Gestione delle richieste API**: Il server supporta richieste `POST` per la registrazione e il login tramite API RESTful.

## Struttura del progetto

```
/login_js_project
├── /node_modules        # Dipendenze di Node.js
├── /public              # File statici (HTML, CSS, JavaScript)
│   ├── index.html       # Pagina di login
│   ├── registrati.html  # Pagina di registrazione
│   ├── style.css        # Stile della pagina di login
│   ├── style2.css       # Stile della pagina di registrazione
│   ├── login.js         # JavaScript per il login
│   └── registrati.js    # JavaScript per la registrazione
├── /server.js           # File principale del server Node.js
└── /package.json        # Gestione delle dipendenze e script
```

## Prerequisiti

Per eseguire il progetto, assicurati di avere installato:

- **Node.js** (versione >= 14.x)
- **MySQL** (o MariaDB) per il database

## Installazione

### 1. Clona il repository

```bash
git clone https://github.com/tuo-username/login_js_project.git
cd login_js_project
```

### 2. Installa le dipendenze

Esegui il seguente comando per installare le dipendenze del progetto:

```bash
npm install
```

### 3. Configura il database

Crea un database in MySQL chiamato `login_js` (o un altro nome a tua scelta) e crea una tabella `utenti` con la seguente struttura:

```sql
CREATE TABLE utenti (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    nome VARCHAR(50) NOT NULL,
    cognome VARCHAR(50) NOT NULL,
    password VARCHAR(255) NOT NULL,
    data DATE NOT NULL
);
```

### 4. Avvia il server

Una volta configurato il database, avvia il server eseguendo il comando:

```bash
node server.js
```

Il server sarà in esecuzione su `http://localhost:3000`.

### 5. Testa il progetto

- Accedi a `index.html` per testare il login.
- Accedi a `registrati.html` per testare la registrazione.

## Descrizione del flusso

1. **Registrazione**: Quando l'utente compila il modulo di registrazione, i dati vengono inviati al server tramite una richiesta `POST` alla rotta `/registrati`. Se la registrazione è corretta, l'utente viene reindirizzato alla pagina di login.
2. **Login**: Quando l'utente effettua il login, i dati (nome utente e password) vengono inviati tramite una richiesta `POST` alla rotta `/login`. Se le credenziali sono corrette, l'utente viene reindirizzato alla pagina `dashboard.html` (o a qualsiasi altra pagina desiderata).

## Tecnologie utilizzate

- **Backend**:
  - Node.js
  - Express.js
  - MySQL
  - Cors
  - Body-Parser

- **Frontend**:
  - HTML
  - CSS
  - JavaScript (Fetch API)

## Autore

Questo progetto è stato creato da [GiuseppeFalliti] - [https://github.com/GiuseppeFalliti]

## Licenza

Distribuito sotto la licenza MIT.

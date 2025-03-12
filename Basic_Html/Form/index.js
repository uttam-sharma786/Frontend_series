import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

// Middleware to parse form data and JSON
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files from the current directory
app.use(express.static(__dirname));

// Correct route spelling from 'sumbit' to 'submit'
app.post('/submit', (req, res) => {
    const { name, email, password, gender, number } = req.body;

    // Server-side validation
    if (!name || !email || !password || !gender || !number) {
        return res.status(400).send('All fields are required');
    }

    if (!/^\d{10}$/.test(number)) {
        return res.status(400).send('Invalid phone number. It must be 10 digits.');
    }

    res.send(`Form submitted successfully! Welcome, ${name}`);
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
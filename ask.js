const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const app = express();
app.use(cors());

const SECRET_KEY = "chave_secreta"; // Chave secreta para gerar o token

// Rota de login usando GET (apenas username "enzo" é aceito)
app.get("/login", (req, res) => {
    const username = req.query.username; // Captura o nome do usuário pela URL

    if (username === "enzo") {
        const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: "1h" });
        res.json({ token });
    } else {
        res.status(401).json({ message: "Usuário não autorizado" });
    }
});

// Inicia a API na porta 3000
app.listen(3000, () => console.log("API rodando na porta 3000"));

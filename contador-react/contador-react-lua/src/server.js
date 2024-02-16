// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = 3001;

app.use(bodyParser.json());

// Configurar conexão com o MongoDB
mongoose.connect('mongodb://localhost:27017/meubanco', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Definir um modelo para o banco de dados
const produtoSchema = new mongoose.Schema({
  titulo: String,
  descricao: String,
  preco: Number,
  imagem: String,
});

const Produto = mongoose.model('Produto', produtoSchema);

// Rota para autenticação
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Verificação básica, substitua por lógica real de autenticação
  if (email === 'usuario@example.com' && password === 'senha123') {
    const token = jwt.sign({ email }, 'mysecretkey', { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Credenciais inválidas' });
  }
});

// Rota protegida - exemplo
app.get('/produtos', authenticateToken, async (req, res) => {
  try {
    const produtos = await Produto.find();
    res.json(produtos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Função middleware para verificar token
function authenticateToken(req, res, next) {
  const token = req.headers['authorization'];

  if (!token) return res.sendStatus(401);

  jwt.verify(token, 'mysecretkey', (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

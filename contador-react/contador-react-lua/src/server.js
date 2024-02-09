const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = 3001;

mongoose.connect('mongodb://localhost:27017/seuBancoDeDados', { useNewUrlParser: true, useUnifiedTopology: true });

const produtoSchema = new mongoose.Schema({
  titulo: String,
  descricao: String,
  preco: Number,
  imagem: String,
});

const Produto = mongoose.model('Produto', produtoSchema);



app.use(express.json());

const secretKey = 'mysecretkey';

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (email === 'usuario@example.com' && password === 'senha123') {
    const token = jwt.sign({ email }, secretKey, { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Credenciais inválidas' });
  }
});

app.get('/exibir-produtos', authenticateToken, async (req, res) => {
  try {
    const produtos = await Produto.find();
    res.json({ produtos });
  } catch (error) {
    console.error('Erro ao obter produtos:', error);
    res.status(500).json({ error: 'Erro ao obter produtos.' });
  }
});

function renderizarPaginaProdutos(produtos) {
    // Gera o HTML da página com os cartões de produtos
    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Produtos</title>
        <style>
          .card {
            border: 1px solid #ddd;
            padding: 10px;
            margin: 10px;
            width: 200px;
            text-align: center;
          }
        </style>
      </head>
      <body>
        <h1>Produtos</h1>
        <div>
          ${produtos.map(renderizarCardProduto).join('')}
        </div>
      </body>
      </html>
    `;
  }
  

  

function authenticateToken(req, res, next) {
  const token = req.headers['authorization'];

  if (!token) return res.sendStatus(401);

  jwt.verify(token, secretKey, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

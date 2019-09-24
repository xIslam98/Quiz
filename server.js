const express = require('express');

const app = express();
app.use(express.static(__dirname));

function runServer() {
  app.get(/.*/, (req, res) => {
    res.sendFile(`${__dirname}/index.html`);
  });

  app.listen(8000, () => console.log('Server avviato all indirizzo http://127.0.0.1:8000'));
}

runServer();

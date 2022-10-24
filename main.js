const express = require('express');
const main = express();

main.use((req, res,next) => {
    res.status(200).send({
        mensagem: 'OK, deu certo'
    });
});

module.exports = main;
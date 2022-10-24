const express = require('express');
const router = require("express").Router();

router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'GET - Retorna todos os produtos'
    });
});

router.post('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'POST - Rota produtos'
    });
});

router.patch('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'PATCH - Rota produtos'
    });
});

router.delete('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'DELETE - Rota produtos'
    });
});

router.get('/:id_produto', (req, res, next) => {
    const id = req.params.id_produto;

    if(id === 'especial') {
        res.status(200).send({
            mensagem: 'você descobriu o ID especial',
            id: id
        });
    } else {
        res.status(200).send({
            mensagem: "Você passou um ID",
            id: id
        })
    }
});

module.exports = router;
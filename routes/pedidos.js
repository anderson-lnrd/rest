const express = require('express');
const router = require("express").Router();

router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'GET - Rota pedidos'
    });
});

router.post('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'POST - Rota pedidos'
    });
});

router.delete('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'DELETE - Rota pedidos'
    });
});

router.get('/:id_pedidos', (req, res, next) => {
    const id = req.params.id_pedidos;

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
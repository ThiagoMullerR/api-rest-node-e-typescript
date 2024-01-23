"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const http_status_codes_1 = require("http-status-codes");
const router = (0, express_1.Router)();
exports.router = router;
router.get('/teste', (_, res) => {
    return res.send('Fazendo GET!');
});
router.post('/teste', (req, res) => {
    // Podemos utilizar o header (req.header) para operações, como token
    //Podemos receber parametros editando a endpoint, ex:
    //router.post('/teste/:id', (req, res) => {
    //    console.log(req.params.id);
    //});
    //console.log(req.query.nome);
    console.log(req);
    return res.status(http_status_codes_1.StatusCodes.UNAUTHORIZED).json(req.body);
    //return res.send('Fazendo POST!');
});

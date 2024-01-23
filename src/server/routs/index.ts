import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';

const router = Router();

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

    return res.status(StatusCodes.UNAUTHORIZED).json(req.body);
    //return res.send('Fazendo POST!');
    
});

export { router };  
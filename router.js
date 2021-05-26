import express from 'express';
import { promises as fs } from 'fs';
import { maisModelos, menosModelos, listaMaisModelos, listaMenosModelos, listaModelos  } from './bussines.js';

const router = express.Router();

router.get('/marcas/maisModelos', async (req, res) => {
    return res.status(200).send(maisModelos())
});

router.get('/marcas/menosModelos', async (req, res) => {
    return res.status(200).send(menosModelos())
});

router.get('/marcas/listaMaisModelos/:id', async (req, res) => {
    return res.status(200).send(listaMaisModelos(req.params.id))

});

router.get('/marcas/listaMenosModelos/:id', async (req, res) => {
    return res.status(200).send(listaMenosModelos(req.params.id))

});

router.post('/marcas/listaModelos', async (req, res) => {
    return res.status(200).send(listaModelos(req.body.nomeMarca))
});

export default router;
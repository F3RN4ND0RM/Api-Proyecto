import express from 'express';
import { check } from 'express-validator';
import { getDocumentos } from '../controller/biblio.controller.js';

const router = express.Router();

router.get('/biblioteca/:busqueda', getDocumentos);

export default router;

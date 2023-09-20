const express = require('express');
const router = express.Router();
const { listarActores } = require('../controllers/actorsController');

router.get('/actors', listarActores);

module.exports = router
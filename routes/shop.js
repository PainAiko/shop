const express = require('express');
const router = express.Router();
const adminData = require('./admin')
const prodController = require('../controllers/products');
router.get('/',prodController.getProducts);

module.exports= router;
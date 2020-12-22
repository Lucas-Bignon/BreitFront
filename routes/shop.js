const express = require('express');
const router = express.Router();
const shopController = require('../controllers/shop');

router.get('/shop', shopController.getIndex);

router.get("/panier", shopController.postIndex);

module.exports = router;
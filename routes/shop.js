const express = require('express');
const router = express.Router();
const shopController = require('../controllers/shop');

router.get('/shop', shopController.postIndex);

router.post("/ajoutproduit", shopController.postIndex);

module.exports = router;
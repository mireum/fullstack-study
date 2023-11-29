const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello, Shop');
});

router.get('/:category', (req, res) => {
  res.send(`${req.params.category} 판매 페이지`);
});

module.exports = router;
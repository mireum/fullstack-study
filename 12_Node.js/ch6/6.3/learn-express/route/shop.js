const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello, Shop');
});

router.get('/:category', (req, res) => {
  if (req.params.category === 'shirts') {
    res.send('셔츠 판매 페이지');
  } else if (req.params.category === 'pants') {
    res.send('바지 판매 페이지');
  } else {
    res.send('404 NOT FOUND');
  }
});

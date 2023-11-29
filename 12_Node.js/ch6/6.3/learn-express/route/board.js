const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello, Board');
});

router.get('/sub/:category', (req, res) => {
  res.send(`${req.params.category} 게시판`);
});

module.exports = router;
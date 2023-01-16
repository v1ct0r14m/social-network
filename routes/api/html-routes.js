const router = require('express').Router();
const path = require('path');

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../dist/index.html'));
});

router.get('/add-pizza', (req, res) => {
  res.sendFile(path.join(__dirname, '../../dist/index.html'));
});

router.get('/pizza', (req, res) => {
  res.sendFile(path.join(__dirname, '../../dist/index.html'));
});

module.exports = router;

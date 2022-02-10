const express = require('express');
const router = express.Router();

const configs = require('../util/config');
const redis = require('../redis');

let visits = 0;

/* GET index data. */
router.get('/', async (req, res) => {
  visits++;

  res.send({
    ...configs,
    visits,
  });
});

/* GET usage metadata. */
router.get('/statistics', async (req, res) => {
  res.send({
    added_todos: Number(await redis.getAsync('added_todos')),
  });
});

module.exports = router;

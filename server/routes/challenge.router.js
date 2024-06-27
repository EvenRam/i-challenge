const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
  console.log("In GET request");

  const sqlText = `
  SELECT * FROM "challenges"
  `;
  pool.query(sqlText)
    .then(result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get all challengen inputs', err);
      res.sendStatus(500)
    })

});
  


/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;

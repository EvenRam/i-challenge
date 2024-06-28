const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    // GET route code here
        console.log("Current user is: ", req.user.username);

        console.log("In GET request");

        const sqlText = `
  SELECT * FROM "challenge"
  `;
        pool.query(sqlText)
            .then(result => {
                res.send(result.rows);
            })
            .catch(err => {
                console.log('ERROR: Get all challenges inputs', err);
                res.sendStatus(500)
            })
});




router.post('/', (req, res) => {
    console.log('POST/new challenge req.body',req.body )

    const newChallenge = req.body;
    console.log('add new challenge', newChallenge)

    const sqlText = `
   INSERT INTO "challenge" ("challenge_name","challenger","measureable_goal","notes", "wager","dates")
   VALUES ($1, $2, $3, $4, $5, $6)
   `;

   const sqValues = [
    newChallenge.name,
    newChallenge.challenger, 
    Number(newChallenge.measureable_goal),
    newChallenge.notes,
    newChallenge.wager, 
    Number(newChallenge.dates)]

   pool.query(sqlText, sqValues)
   .then((result) => {
       console.log('added challenge to the database', newChallenge);
       res.sendStatus(201);
   })
   .catch((error) => {
       console.log(`Error making database query ${sqlText}:`, error);
       res.sendStatus(500); // Good server always respond
   })
});

module.exports = router;

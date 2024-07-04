const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route endpoint --- sets up the HTTP GET request 
 * The variable sqText is a SQL query to select all columns from the challenge table.
 */
router.get('/', (req, res) => {
    // GET route code here
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
    console.log('POST/new challenge req.body', req.body)

    const newChallenge = req.body;
    console.log('add new challenge', newChallenge)

    const sqlText = `
   INSERT INTO "challenge" ("challenge_name","challenger","measureable_goal","notes", "wager","dates", "user_id")
   VALUES ($1, $2, $3, $4, $5, $6, $7);
   `;

    const sqValues = [
        newChallenge.challenge_name,
        newChallenge.challenger,
        Number(newChallenge.measureable_goal),
        newChallenge.notes,
        newChallenge.wager,
        newChallenge.dates,
        req.user.id
    ]

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


router.put('/:id', (req,res)=>{
//updating single student

const idToUpdate = req.params.id;
const editChallenge = req.body

const updateChallenges =
 [
    editChallenge.challenge_name,
  editChallenge.measureable_goal,
  editChallenge.notes,
  editChallenge.wager,
  editChallenge.dates,
  editChallenge.id,
  req.user.id
]
console.log('req.body', updateChallenges)
console.log("req.params.id", idToUpdate)

const sqlText= `
UPDATE "challenge"
SET "challenge_name" = $1,
"measureable_goal" = $2,
"notes" = $3, 
"wager" = $4,
"dates" = $5, 
WHERE "id" = $6 AND "user_id" = $7;
`
pool.query(sqlText, updateChallenges [idToUpdate])

.then((result)=> {
    if (result.rowCount > 0){
        res.sendStatus(204);
    }else{
        res.sendStatu(403);
    }
})
.catch((error)=>{
    console.error('Error updating challenge:', error);
    res.sendStatus(500);
})
});


router.delete('/:id', (req, res) => {

    const challengeId = req.params.id;
    console.log('Delete request for challengeid', challengeId);

    const userId = req.user.id;
    console.log('Delete request for id', userId);

    const queryText = `
            DELETE FROM "challenge"
             WHERE "id" = $1 AND "user_id" = $2;
             `;
    pool.query(queryText, [challengeId, userId])
        .then((result) => {
            if (result.rowCount > 0) {
                res.sendStatus(204)
            } else {
                res.sendStatus(403)
            }
        })
        .catch((error) => {
            console.log(`Error making query.. '${queryText}'`, error)
            res.sendStatus(500)
        })
});

module.exports = router;

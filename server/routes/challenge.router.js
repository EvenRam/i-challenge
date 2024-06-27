const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    // GET route code here
    if (req.isAuthenticated()) {
        console.log('User is authenticated?:', req.isAuthenticated());
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
    } else {
        res.sendStatus(401);
    }
});




router.post('/', (req, res) => {
    
});

module.exports = router;

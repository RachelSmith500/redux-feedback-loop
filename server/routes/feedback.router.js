const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');
const { query } = require('../modules/pool');

// router.get('/', (req, res) => {
//     // Find all orders and return them
//     pool.query('SELECT * FROM "feedback";').then((result) => {
//         res.send(result.rows);
//     }).catch((error) => {
//         console.log('Error GET /api/feedback', error);
//         res.sendStatus(500);  
//     });
// })

router.post('/', (req, res) => {
    let query =`INSERT INTO feedback (feeling, understanding, support, comments)
    VALUES ($1, $2, $3, $4)`
    pool.query(query, [req.body.feeling, req.body.understanding, req.body.support, req.body.comments])
    .then((result) => {
        res.sendStatus(201);
    }).catch(error => {
        console.log('error in POST:', error)
        res.sendStatus(500)
    })
});

module.exports = router;
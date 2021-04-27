const express = require('express');
const router = express.Router();
const daBurger = require('../models/burgers');

router.get ('/', (req,res) => {
    daBurger.all((data) => {
        const hbsObject = {
            bugers: data,
        };
        console.log(hbsObject);
        res.render('index', hbsObject);
    });
});

router.post('/api/burgers', (req, res) =>{
    daBurger.insertOne([req.body.name], (result) => {
        res.json(result)
    })

    
});

router.put('/api/burgers/:id', (req, res) => {
    const id = `${req,params.id}`;

    daBurger.updateOne(
        id,
        (result) => {
            if (result.changedRows ==0) {
                return res.status(404).end();
            }
            res.status(200).end();
        }           
    );
});

module.exports = router;


const express = require('express');
const hbsExp = require
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
    
    router.post('/api/burgers', (req, res) =>{
        let devoured = 0;
        if (req.body.devoured === 'true') {
            devoured = 1;
        }

        daBurger.create(
            ['burger_name', 'devoured'],
            [req.body.burger_name, devoured],
            (result) => {
                console.log(result);
            }
        );
    });

    router.put('/api/burgers/id:', (req, res) => {
        const 
    })
});
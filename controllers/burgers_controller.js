const express = require('express');
const { end } = require('../config/connection');
const hbsExp = require('express-handlebars')
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
    const condition = `id ${req,params.id}`;

    console.log('condition', condition);

    daBurger.update(
        {
            devoured: req.body.devoured,
        },
        condition,
        (result) => {
            if (result.changedRows ==0) {
                return res.status(404).end();
            }
            res.status(200).end();
        }           
    );
});

router.delete('/api/burgers/:id', (req, res) => {
    const condition = `id ${req,params.id}`;

    daBurger.delete(condition, (result) => {
        if (result.afftectedRows == 0) {
            return res.status(404).end();
        }
        res.status(200).end();
    });
});

module.exports = router;


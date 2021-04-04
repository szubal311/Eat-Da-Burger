const orm = require('../config/orm');

const yumBurger = {
    all(cb){
        orm.selectAll('burgers', (res) => {
            cb(res);
        });
    },

    insertOne(reqBody, cb) {
        orm.insertOne('burgers', reqBody, (res) => {
            cb(res)
        });
    },

    updateOne(id, cb) {
        orm.updateOne(id, (res) => cb(res));
    }
};

module.exports = yumBurger
const orm = require('../config/orm');


const burgers = {
    all(cb){
        orm.all('burgers', (res) => {
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

module.exports = burgers
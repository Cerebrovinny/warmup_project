const test = require('tape');
const main = require('../model1.ts');


function insertDb(){
    test('Check if insert name', (t) => {
        t.pass(main.main("beans") === "Text", "Success")
        t.end()
    })
}

module.exports = {insertDb}
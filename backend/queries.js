const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./coffee.db', (err) => {
    if (err) {
        return console.log(err.message);
    }
    console.log('Connected to the SQlite database.');
});

//create the table
db.serialize(() => {
    db.run('CREATE TABLE IF NOT EXISTS table1(beans text, types text, size number)',
    (err) => {
        if(err) {
            console.log(err);
            throw err;
        }
    })
});

// db.run(`INSERT INTO table1(beans,types,size)
//         VALUES('green coffee', 'green', '30')`, (err) => {
//             if(err) {
//                 console.log(err);
//                 throw err;
//             }
//         });

//log db data
db.each(`SELECT * FROM table1`, (err, row) => {
    if(err) {
        console.log(err);
        throw err;
    }
    console.log(row.beans);
})

db.close((err) => {
    if(err) {
        console.log(err);
        throw err;
    }
    console.log('Closed db connection');
});
const sqlite3 = require('sqlite3').verbose();
const sqlite = require('sqlite');

async function main() {
    try {
        const db = await sqlite.open({ filename: './db/database.db', driver: sqlite3.Database });

        await db.run(`create table if not exists table1 (beans text, types text, size number)`);

        //await db.run('insert into table1 (beans) values (?)', ['Black Coffee']);

        const rows = await db.all('select * from table1');
        console.log(rows);

        await db.close();
    } catch (error) {
        console.log(error);
    }
}

main();

module.exports = {main}
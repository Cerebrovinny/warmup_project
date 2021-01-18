const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const port = 3000;
//app.use(express.json())

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.get('/', (request, response) => {
    response.json([
        {a:1},
        {b:2}
    ]);
});

app.post('/clicked', (request, response) => {
    console.log(request.body.a);
    console.log(request.body);
    response.sendStatus(201);
});

app.listen(port, () => console.log(`Warm Up app listening on port ${port}!`))
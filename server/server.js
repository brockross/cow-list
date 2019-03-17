const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const mysql = require('mysql');
const sampleData = require('./sampleData');

app.use(bodyParser.json());

//============= DATABASE SETUP =============//

const db = mysql.createConnection({
  user: 'root',
  database: 'cows'
})

db.connect((err) => {
  if(err) {
    console.log('you messed up your db connection bruh');
  }
    console.log('mysql successfully connected. Great work team');
})


//================ DEFAULT GET REQUEST ==================//
app.get('/', (req, res) => {
  res.send('hey buddy');
})


//================ GET ALL REQUEST ==================//
app.get('/api/cows', (req, res) => {

  console.log(`Now serving a ${req.method} request`);

  let queryString = `SELECT * FROM cows`;

  db.query(queryString, (err, results) => {
    if (err) {
      console.log('your query attempt was a failure, just like everything else in your life');
    }
    else console.log('results of the database query: ', results);
  })

  res.status(200);
  res.send(sampleData.sampleCowData);
})

//================ POST REQUEST ==================//
app.post('/api/cows', (req, res) => {
  console.log(`Now serving a ${req.method} request`);
  sampleData.sampleCowData.push(req.body);
  res.sendStatus(201);
})

app.listen(3000, () => {
  console.log(`listening on port ${port}!`);
})

//
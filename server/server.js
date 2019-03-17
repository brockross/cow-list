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
      console.log('results of the database query: ', results);
      res.status(200);
      res.send(results);
  })
})


//================ POST REQUEST ==================//
app.post('/api/cows', (req, res) => {
  console.log(`Now serving a ${req.method} request`);

  let cow = req.body;
  let params = [cow.name, cow.description];

  let queryString = `INSERT INTO cows (id, name, description)\
                     VALUES (null, ?, ?)`;

  db.query(queryString, params, (err, results) => {
    if (err) {
      console.log(`database insertion failed`);
    } else {
      console.log(`database insertion successful!`);
      res.sendStatus(201);
    }
  })
})


//================ DELETE REQUEST ==================//
app.delete('/api/cows', (req, res) => {
  console.log(`Now serving a ${req.method} request`);

  let queryString = `TRUNCATE TABLE cows`;

  db.query(queryString, (err, results) => {
    if (err) {
      console.log(`table data deletion failed.`);
    } else {
      console.log(`you killed all the cows, you bastard`);
      res.sendStatus(200);
    }
  })
})


app.listen(3000, () => {
  console.log(`listening on port ${port}!`);
})
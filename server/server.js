const express = require('express');;
const connectDB = require('./config/db');

const app = express();
//Connect Database
connectDB();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.status(200).send('API running');
})

//Define Routes

app.listen(port, () => console.log(`listening on port ${port}`));
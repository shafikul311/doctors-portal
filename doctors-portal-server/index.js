const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');

const port = process.env.PORT || 5000 ;
const app = express();

app.use(cors());
app.use(express.json());
// console.log(process.env)
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.lehtzpo.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// console.log(uri)
// console.log(process.env)



app.get('/', (req, res) => {
  res.send('Hello Doctors portal Server')
})
app.get('/about', (req, res) => {
  res.send('Inshallah I will get a job immediately')
})

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})
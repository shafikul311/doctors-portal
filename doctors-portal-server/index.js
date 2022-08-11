const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');

const port = process.env.PORT || 5000 ;
const app = express();

app.use(cors());
app.use(express.json());
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.lehtzpo.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


async function run(){
  try {
    await client.connect();
    
    const serviceCollections = await client.db("doctors_portal").collection('service');
    console.log("db connected ")

    app.get('/service', async (req, res) => {
      const query = {}
      const cursor = serviceCollections.find(query);
      const service = await cursor.toArray();
      res.send(service);      
    })

  }
  finally {
  }
}

run().catch(console.dir);

app.get('/', (req, res) => {
  res.send('Hello Doctors portal Server')
})


app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})
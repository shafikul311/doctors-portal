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
    
    const serviceCollections = client.db("doctors_portal").collection('service');
    const bookingCollections = client.db("doctors_portal").collection('bookings');
    // console.log("db connected ")

    /**
     * Api naming convention 
     * app.get('/booking') // get all booking 
     * app.get('/booking/:id') // get a specific booking          
     * app.post('/booking') // post a new service         
     * app.patch('/booking/:id') //  a specific booking          
     * app.delete('/booking/:id') // get a specific booking          
     * **/

    app.get('/service', async (req, res) => {
      const query = {}
      const cursor = serviceCollections.find(query);
      const service = await cursor.toArray();
      res.send(service);      
    })

    app.post('/booking', async (req, res) => {
      const booking = req.body;
      const query = {treatment: booking.treatment, date: booking.date, patient: booking.patient}
      const exists = await bookingCollections.findOne(query);
      if(exists){
        return res.send({success: false, booking: exists})
      }
      const result = bookingCollections.insertOne(booking);
      res.send({success: true, result});

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
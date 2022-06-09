const express = require('express');
require('dotenv').config();
const app = express();
// const jwt =require('jsonwebtoken');
const cors=require('cors');
const port=process.env.PORT || 5000;

const ObjectId=require('mongodb').ObjectId;
app.use(cors());
app.use(express.json());




// arif
// PLkezuQ8eraiBDjv

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://arif:PLkezuQ8eraiBDjv@cluster0.mfnwm.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run(){
  try{
   await client.connect();
   const userCollection= client.db("allprojercts").collection("project"); 


  app.get('/project',async(req,res)=>{
    const query= {} ;
    const cursor= userCollection.find(query);
    const users=await cursor.toArray();
    res.send(users)
   })

   app.get('/project/:id',async(req,res)=>{
    const id=req.params.id;
    const query={_id:ObjectId(id)};
    const result=await userCollection.findOne(query);
    res.send(result); 
  })

  }
  finally{
   //  awite client .close();
  }
}
run().catch(console.dir);




/* const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.sursn.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run(){
  try{
   await client.connect();
   const userCollection= client.db("allprojercts").collection("project"); 


  app.get('/project',async(req,res)=>{
    const query= {} ;
    const cursor= userCollection.find(query);
    const users=await cursor.toArray();
    res.send(users)
   })


  }
  finally{
   //  awite client .close();
  }
}
run().catch(console.dir);
 */




app.get('/',(req,res) =>{
  res.send('arif Node runing!!!')
})

app.listen(port,() =>{
  console.log('portfolio is runing!!!',port)
})
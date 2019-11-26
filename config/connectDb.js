// import { MongoClient } from 'mongodb';

// //DB Config
// const db = require('./keys').mongoURI;

// // Connect to MongoDB

// export const connectDb = () => {
//   const client = new MongoClient(db, { useNewUrlParser: true });
//   client.connect(err => {
//     if (err) throw err;
//     // const collection = client.db("test").collection("users");
//     // perform actions on the collection object
//     client.close();
//   });
// }

import mongoose from 'mongoose';


// DB Config
import { mongoURI as db } from './keys';

// Connect to MongoDB
mongoose.connect(db)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));
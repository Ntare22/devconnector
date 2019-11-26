import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import usersRouter from './routes/userRoutes';
import profileRouter from './routes/profileRoutes';
import postsRouter from './routes/postRoutes';

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({extended: false }));
app.use(bodyParser.json());
 


// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));


app.get('/', (req, res) => res.send('Hello'));

app.use('/api/users', usersRouter);
app.use('/api/profile', profileRouter);
app.use('/api/posts', postsRouter);


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
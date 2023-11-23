'use strict';

import express from 'express';
import bodyParser from 'body-parser';
import 'dotenv/config';
import cors from 'cors';
import connectDatabase from './config/dbConnection.js';
import routes from './routes/index.js';

const app = express();
const port = process.env.PORT || 3000;

// Use middleware to parse JSON requests
app.use(bodyParser.json());
app.use(cors({
  origin: '*'
}));

// Use your defined routes
app.use('/api', routes);

// Connect to the database and start the server
connectDatabase()
  .then(() => {
    app.listen(port, () => {
      console.log(`Express server started. Listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.error('Error connecting to the database:', err);
  });

export default app;

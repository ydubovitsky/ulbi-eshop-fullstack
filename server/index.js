// Imports
const express = require('express');
require('dotenv').config();
const sequelize = require('./db');
const models = require('./models/models');
const cors = require('cors');

const PORT = process.env.PORT || 5000;

const app = express();
app
  .use(cors())
  .use(express.json());

app.get('/', (req, resp) => {
  resp.status(200).json({ message: 'WORKING!' })
})

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => {
      console.log(`Server is working on the port ${PORT}`)
    })
  } catch (error) {
    console.log(error)
  }
}

start();


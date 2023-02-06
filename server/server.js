const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const cors = require('cors');
const app = express();

// routes
const tasks = require('./routes/api/tasks');

const routes = require('./routes/api/tasks');
// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Server is running!'));

// use Routes
app.use('/api/tasks', tasks);

// app.get('/', (req, res) => res.send('server works!'));

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

const db = require("./config/keys").mongoURI;

mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server up and running on port ${port} !`));





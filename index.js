const express = require('express');
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
require('dotenv/config');

app.use(cors());
app.use(bodyParser.json());
const postsRoutes = require('./routes/posts');
const Post = require('./models/Post');


app.use('/posts', postsRoutes);

app.get('/', (req, res) => {
    res.send('Home');
});

//connect to DB
mongoose.connect(
    process.env.DB_CONNECTION, 
    { useNewUrlParser: true },
    () => {
    console.log('connected to DB');
})
app.listen(4000);
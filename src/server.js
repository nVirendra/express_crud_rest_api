const express = require('express');
const app = express();
const connectDB = require('./config/db');

const PORT = process.env.PORT || 3000;

connectDB();// connect to MongoDB

app.use(express.json()); //middleware to parse json body reqest data

app.get('/', (req, res) => {
    res.json({"message": "Hi, this is restful crud api"});
});

const UserRoute = require('./routes/user')
app.use('/user',UserRoute)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
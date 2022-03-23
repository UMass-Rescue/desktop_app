const express = require('express'); 
const { default: mongoose } = require('mongoose');

const app = express(); 

const mongoUri = 'mongodb+srv://smritidas:justkidding@cluster0.jd128.mongodb.net'
const bodyParser = require("body-parser");
const cors = require("cors");
var corsOptions = {
  origin: "http://localhost:8081"
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

mongoose.connect(mongoUri,
    err => {
        if(err) throw err;
        console.log('connected to MongoDB')
        
    });




app.get('/', (req, res) => {
    res.send('Hi there!'); 
}); 

app.listen(3001, () => {
    console.log('Listening on port 3001'); 
}); 

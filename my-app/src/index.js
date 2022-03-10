const express = require('express'); 
const { default: mongoose } = require('mongoose');

const app = express(); 

const mongoUri = 'mongodb+srv://sne23star:1234@cluster0.foo9a.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

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
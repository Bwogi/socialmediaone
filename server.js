const express = require('express');
const connectDB = require('./config/db')
const app = express();

// to access the URL body(req.body), we need to initialise this middleware 
app.use(express.json({extended: false}))


app.get('/',(req,res)=>res.send('API Running...'))

// define the routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/posts',require('./routes/api/posts'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profiles', require('./routes/api/profiles'));


const PORT = process.env.PORT || 8000;

app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`))
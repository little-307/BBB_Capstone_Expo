import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

// import router from './routes/user1.js';

import postRoutes from './routes/posts.js';


const PORT = 5000;
const app = express();

// set up middleware
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

// set up routes
app.use('/posts', postRoutes)


// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })

// app.post('/', (req, res) => {
//     res.send('Got a POST request')
// })

// app.put('/user', (req, res) => {
//     res.send('Got a PUT request at /user')
// })

// app.delete('/user', (req, res) => {
//     res.send('Got a DELETE request at /user')
// })

// Import the routes
// const userRoutes = require("./routes/user.js")

// Using routes
// app.use('/api, userRoutes')

mongoose.connect('mongodb://localhost:27017/branch', function(err) {
    if (err) throw err;
    console.log('connected')
})

app.listen(PORT, () => console.log(`server running on ${PORT}`))

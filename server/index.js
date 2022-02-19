import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

const PORT = 5000;
const app = express();

// set up middleware
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

// set up routes
// app.use('./user', userRoutes)
// app.use('./branch', branchRoutes)

mongoose.connect('mongodb://localhost:27017/branch', function(err) {
    if (err) throw err;
    console.log('connected')
})

app.listen(PORT, () => console.log(`server running on ${PORT}`))

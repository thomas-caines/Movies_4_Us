// From Dependencies
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
// From Other Folders
import dbConnect from './config/mongoose.config.js';
import reviewRouter from './routes/review.routes.js';

const app = express()
app.use(express.json(), cors())

app.use('/review', reviewRouter)

dotenv.config()
const PORT = process.env.PORT

dbConnect()

app.listen(PORT, () =>
    console.log(`Listening on port: ${PORT}`)
)
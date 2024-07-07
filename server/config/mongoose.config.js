import { connect } from 'mongoose';
import dotenv from 'dotenv';

dotenv.config()
const MONGODB_URI = process.env.MONGODB_URI

async function dbConnect() {
    try {
        await connect(MONGODB_URI, {
            dbName: 'movies_4_Us'
        })
        console.log(`Successfully connected to MongoDB`)
    } catch (error) {
        console.log(`There was an error config`)
        throw error
    }
}

export default dbConnect
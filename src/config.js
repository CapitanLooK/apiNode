import {config} from 'dotenv';
config()

export default {
    databaseUri: process.env.DATABASE_URI,
    jwtSecret: process.env.JWT_SECRET
}
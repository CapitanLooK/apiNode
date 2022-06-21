import mongoose from 'mongoose';
import config from './config.js';

(
    async()=>{
        const db = await mongoose.connect(config.databaseUri);
        console.log('Database is connected to:', db.connection.name);
    }
)();
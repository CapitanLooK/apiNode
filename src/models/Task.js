
import {Schema, model, mongoose} from 'mongoose';
import autoIncrementFactory from 'mongoose-sequence';
import config from '../config.js';

const connection = mongoose.createConnection(config.databaseUri);
const AutoIncrement = autoIncrementFactory(connection);

const taskSchema = new Schema({
    _id: Number,
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    done: {
        type: Boolean,
        default: false
    }
},{
    versionKey: false,
    timestamps: true
});

taskSchema.plugin(AutoIncrement, {inc_field: '_id'});
export default model('Task', taskSchema);
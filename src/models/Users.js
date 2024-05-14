import {Schema, model} from "mongoose";
import hashPassword from "../middlewares/hashPassword";

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    }
},{
    versionKey: false,
    timestamps: true
});

userSchema.pre('save', hashPassword);
export default model('User', userSchema);
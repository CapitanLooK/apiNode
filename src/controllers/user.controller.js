import User from '../models/Users';
import jwt from 'jsonwebtoken';
import config from '../config';
import bcrypt from 'bcrypt';

export const createUser = async (req, res) => {
    try {
        const {username, name, email, password} = req.body;
        const user = new User({
            username,
            name,
            email,
            password
        });
        const token = jwt.sign({_id: user._id}, config.jwtSecret);
        await user.save();
        res.status(201).send({user, token});
    } catch (error) {
        res.status(400).send(`Error al crear user: ${error}`);
    }
}

export const loginUser = async (req, res) => {
    try {
        const {email, password} = req.body;
        const user = await User.findOne({email});
        if (!user) {
            return res.status(404).send({message: 'Unable to login'});
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).send({message: 'Unable to login'});
        }
        const token = jwt.sign({_id: user._id}, config.jwtSecret);
        res.send({user, token});
    } catch (error) {
        res.status(400).send(error);
    }
}
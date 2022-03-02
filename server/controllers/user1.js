import bcrypt from 'bcryptjs';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import UserModel from '../models/user1.js';


const secret = 'test';

export const signIn = async (req, res) => {
    const { email, password } = req.body;

    try {
        const existingUser = await UserModel.findOne({ email });

        if (!existingUser) return res.status(400).json({ message: 'Email does not exist' });
        
        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

        if (!isPasswordCorrect) return res.statue(400).json({ message: 'Password incorrect.' });

        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, secret, {expiresIn: '8h' });

        res.status(200).json({ result: existingUser, token });
    } catch (err) {
        res.status(500).json({ message: 'Something went wrong ( ͡°Ĺ̯ ͡° )'});

        console.log(err)
    }
}

export const signUp = async (req, res) => {
    const { username, email, password, password2 } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 12);

        const result = await UserModel.create( {
            username,
            email,
            password: hashedPassword,
            password2
        });

        const token = jwt.sign({ email: result.email, id: result._id }, secret, { expiresIn: '8h' });

        res.status(201).json({ result: result, token });
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong ( ͡°Ĺ̯ ͡° )'} );
        console.log(error);
    }
}


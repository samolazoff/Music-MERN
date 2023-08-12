import bcrypt from "bcryptjs";
import User from "../models/User.js";

export const register = async (req, res) => {
    try {
        const {username, password} = req.body;
        const isUser = await User.findOne({username});

        if (isUser){
            return res.json({
                message: 'Username is already taken!!!'
            })
        };
        
        const salt = bcrypt.genSaltSync(8);
        const hash = bcrypt.hashSync(password, salt);

        const newUser = new User({
            username,
            password: hash
        });

        await newUser.save();

        res.json({
            newUser,
            message: 'Registration is successful!!!'
        });

    } catch (error) {
        res.json({
            message: 'Mistak of registration!!!'
        });
        console.log(error);
    };
};

export const login = async (req, res) => {
    try {
        
    } catch (error) {
        console.log(error);
    }
};

export const getMe = async (req, res) => {
    try {
        
    } catch (error) {
        console.log(error);
    }
};
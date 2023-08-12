import bcrypt from "bcryptjs";
import User from "../models/User.js";
import jwt from "jsonwebtoken";

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
        const {username, password} = req.body;
        const user = await User.findOne({username});

        if (!user){
            return res.json({
                message: 'Username is not defaund!!!'
            });
        };
        
        const isPasswordCorrect = await bcrypt.compare(password, user.password);

        if(!isPasswordCorrect){
            res.json({
                message: 'Password is wrong!!!'
            });
        };

        const token = jwt.sign(
            {
            id: user.id,
            username: user.username
            },
            process.env.JWT_SECRET,
            {expiresIn: '30d'}
        );
        res.json({
            token,
            user,
            message: 'You are sistem'
        })

    } catch (error) {
        res.json({
            message: 'Mistak of login!!!'
        });
        console.log(error);
    };
};

export const getMe = async (req, res) => {
    try {
        const user = await User.findById(req.userId);
        if (!user) {
            return res.json({
                message: "No such user exists"
            })
        };
        const token = jwt.sign(
            {id: user.id},
            process.env.JWT_SECRET,
            {expiresIn: '30d'}
        );
        res.json({
            user,
            token
        })
    } catch (error) {
        res.json({
            message: 'No access!!!'
        });
        console.log(error);
    }
};
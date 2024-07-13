const bcrypt = require('bcryptjs');
const User = require('../models/about')

const createAccount = async (req, res, next) => {
    try {
        const { username, email, password, phone, occupation } = req.body;
        const usernameCheck = await User.findOne({ username });

        if (usernameCheck)
            return res.json({ msg: "Username already used", status: false });
        
        const emailCheck = await User.findOne({ email });
        if (emailCheck)
            return res.json({ msg: "Email already used", status: false });
        
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
            email,
            username,
            password: hashedPassword,
            phone,
            occupation
        });

        const { password: pass, ...data } = user._doc;
        return res.json({ status: true, user: data });

    } catch (error) {
        next(error);
    }
}
const login = async (req, res, next) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });

        if (!user)
            return res.json({ msg: "User not found", status: false });

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch)
            return res.json({ msg: "Invalid credentials", status: false });

        const { password: pass,...data } = user._doc;
        return res.json({ status: true, user: data });

    } catch (error) {
        next(error);
    }
}

const getUser = async (req, res, next) => {
    try {
        const user = await User.find({});
        
        if (!user)
            return res.json({ msg: "User not found", status: false });
        
        const { password: pass,...data } = user[0]._doc;
        res.json({ status: true, user: data });

    } catch (error) {
        next(error);
    }
}

module.exports = {
    createAccount,
    login,
    getUser
}
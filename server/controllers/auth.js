const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/userDetails')

require('dotenv').config();

exports.signUp = (req, res) => {
    try{
        const {name, email, phoneNumber, password} = req.body;

        const existingUser = User.findOne({email});
        if(existingUser) {
            return res.status.json({
                success: false,
                message: "User Already Exists"
            })
        }

        let hashedPassword;
        try{
            let saltRound = 10;
        } catch (error) {

        }
    } catch (error) {

    }
}
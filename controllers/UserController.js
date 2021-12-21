const express = require("express");
const HELPERS = require("../HELPERS/helpers");
const router = express.Router();

router.signin = (req, res) => {
    let status = 500;
    let message = "Oops Something went wrong";
    let inputs = req.body;
    console.log(inputs);

    if (inputs.username && inputs.password) {
        message = HELPERS.validatepassword(inputs.password);
        if (message === 'User has been logged in successfully') {
            status = 200;
            message = "User has been logged in successfully";
        }
    }
    else {
        message = "Please Fill The Necessary Details";
    }

    return res.json({ status, message })
}

module.exports = router;
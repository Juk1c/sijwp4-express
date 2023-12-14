const JWT_secret_key="kcfBybzQ5EUkmpBRbKmrwsF8sdBwdvc7Iw89V6MjHGfj3cS59c6XmrRoc907tlImJTMakQ7H7DcubSFUR7Ob3RsHmPfvJzhlmGMCyllY20p9ojd6IRYgwa2uUdFZtiw";

const jwt = require("jsonwebtoken");

function getUserJwt(id, email, name, role, expDays = 7) {
    const tokenData = {
        uid: id,
        email: email,
        name: name,
        role: role,
        time: Date.now()
    };

    const tokenOptions = {
        expiresIn: expDays * 24 * 60 * 60
    };

    const token = jwt.sign(tokenData, JWT_secret_key, tokenOptions);

    return token;
}

//MIDDLEWARE FOR AUTH COOKIE CHECK
function checkAuthCookie(req, res, nex) {
    const token = req.cookies("auth");
    console.log("COOKIE CHECK", token); 

    const result = jwt.verify (token, JWT_SECRET_KEY);
    console.log("TOKEN CHECK", result); 
}

module.exports = {
    getUserJwt
};

require("dotenv").config();

const authHeader = {
    headers: {
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
    }
};

module.exports = authHeader;



const axios = require("axios");
require("dotenv").config();

const LOG_API = "http://4.224.186.213/evaluation-service/logs";

async function Log(stack, level, packageName, message) {

    try {

        const response = await axios.post(
            LOG_API,
            {
                stack,
                level,
                package: packageName,
                message
            },
            {
                headers: {
                    Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
                }
            }
        );

        console.log("Log created successfully");
        console.log(response.data);

        return response.data;

    } catch (error) {

        console.log("Logging failed");

        if (error.response) {
            console.log(error.response.data);
        } else {
            console.log(error.message);
        }
    }
}

module.exports = Log;



const express = require("express");
const Log = require("./middleware/logger");

const app = express();

app.use(express.json());

app.get("/", async (req, res) => {

    console.log("Route hit");

    try {

        const result = await Log(
            "backend",
            "info",
            "route",
            "Root route accessed"
        );

        console.log("Logger result:", result);

    } catch (err) {

        console.log("Logger crashed");
        console.log(err);

    }

    res.json({
        message: "Server running"
    });
});

app.listen(3000, () => {
    console.log("Server started");
});




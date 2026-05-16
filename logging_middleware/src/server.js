
const express = require("express");
const Log = require("./middleware/logger");

const app = express();

app.use(express.json());

app.get("/", async (req, res) => {

    await Log(
        "backend",
        "info",
        "route",
        "Root route accessed"
    );

    res.json({
        message: "Server running"
    });
});

app.get("/users", async (req, res) => {

    await Log(
        "backend",
        "info",
        "route",
        "GET users API called"
    );

    res.status(200).json({
        message: "Users fetched successfully",
        users: [
            {
                id: 1,
                name: "Divya"
            },
            {
                id: 2,
                name: "John"
            }
        ]
    });
});

app.post("/users", async (req, res) => {

    await Log(
        "backend",
        "info",
        "controller",
        "POST users API called"
    );

    const user = req.body;

    res.status(201).json({
        message: "User created successfully",
        user
    });
});

app.post("/login", async (req, res) => {

    await Log(
        "backend",
        "info",
        "service",
        "Login API called"
    );

    const { email } = req.body;

    res.status(200).json({
        message: "Login successful",
        email
    });
});

app.listen(3000, () => {
    console.log("Server started");
});


require("dotenv").config();
require("express-async-errors");

const connectDB = require("./db/connect");
const express = require("express");
const cors = require("cors");
const app = express();
const mainRouter = require("./routes/user");

app.use(express.json());

const corsOptions = {
    origin: "*",
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
};

app.use(cors(corsOptions));

app.use("/api/users", mainRouter);

const port = process.env.PORT || 3000;

console.log('DATABASE_URL', process.env.MONGO_URI)

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => {
            console.log(`Server is listening on port http://localhost:${port}/api/users`);
        });
    } catch (error) {
        console.log(error);
    }
};

start();
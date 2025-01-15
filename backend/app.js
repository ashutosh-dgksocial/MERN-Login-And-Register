require("dotenv").config();
require("express-async-errors");

const connectDB = require("./db/connect");
const express = require("express");
const app = express();
const mainRouter = require("./routes/user");
const cookieParser = require("cookie-parser");

app.use(cookieParser());

app.use(express.json());

const cors = require("cors");
const corsOptions = {
    origin: "http://localhost:5173", // Allow requests from the frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true, // Enable credentials (cookies, authorization headers, etc.)
};

// Enable CORS for all routes
app.use(cors(corsOptions));

// if (process.env.NODE_ENV === "production") {
//     // You can enable CORS for production in a more controlled way if needed
//     app.use(cors(corsOptions));
// }


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
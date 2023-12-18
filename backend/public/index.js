"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("./db");
const routes_1 = require("./routes/routes");
const express = require('express');
const app = express();
require('dotenv').config();
app.use('/users', routes_1.userRouter);
app.listen(process.env.PORT, async () => {
    try {
        await db_1.connection;
        console.log("listening to port", process.env.port);
    }
    catch (error) {
        console.log(error);
    }
});

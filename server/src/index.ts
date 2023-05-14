import express, { Application } from "express"; // const express = require('express');
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from '../routes/posts'
import * as dotenv from 'dotenv';

dotenv.config();

const app: Application = express();

app.use('/posts', postRoutes)

app.use(bodyParser.json({ limit: "30mb" }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const CONNECTION_URL: string = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster01.drckdar.mongodb.net/?retryWrites=true&w=majority`

const PORT: number | string = process.env.PORT || 5000

mongoose.connect(CONNECTION_URL,)
    .then(() => app.listen(PORT, () => console.log(`Server running on port:${PORT}`)))
    .catch((error) => console.log("some error"))

// mongoose.set('useFindAndModify', false)


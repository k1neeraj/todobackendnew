import express from 'express';
import cors from 'cors';
import dotenv from "dotenv";
import { Database } from './src/db/db.js';
import Task from './src/routes/Task.routes.js';
dotenv.config({
    path: './.env'
});

const app = express();
const PORT =process.env.PORT || 3000;
app.use(cors());
app.use(express.json());

app.use('/api/tasks', Task);
Database()
.then(()=>{
    app.listen( PORT ,()=>{
        console.log("The Server is Starting ");
    })
}).catch((error)=>{
    console.log("The ever is FAILED",error);
})
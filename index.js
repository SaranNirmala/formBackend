import express from 'express';
import cors from 'cors';
import env from 'dotenv';
import connectToDb from './db/connection.js';
import { formdataRouter } from './routes/form.js';

const app= express();
env.config();

const port=process.env.PORT;
await connectToDb();

app.use(express.json());
app.use(cors());

app.use('/datas', formdataRouter)

app.get('/', (req, res) =>{
  res.send("I am rendering")
});

app.listen(port, () => console.log("App listening on the port", port))
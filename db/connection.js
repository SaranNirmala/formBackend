import mongoose from "mongoose";
import env from "dotenv";

env.config()

const userName=process.env.USER_NAME || '';
const password=process.env.PASSWORD || '';
const cluster= process.env.CLUSTER || '';
const dbName=process.env.DB_NAME || '';

const localdb='mongodb://localhost:27017/Day38'

const cloudUrl =`mongodb+srv://${userName}:${password}@${cluster}/${dbName}?retryWrites=true&w=majority`;

const connectToDb= () =>{
  try{
    const db= mongoose.connect(localdb);
    if(db){
        console.log("Connection to Database")
        
    }

  } catch(err){
     console.error("Error connecting in Database", err);
     process.exit(1);
  }
}

export default connectToDb;
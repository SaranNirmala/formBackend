import mongoose from "mongoose";

const formSchema= mongoose.Schema({
    // id:{
    //     type:"string",
    //     required: true
    // },
    name:{
        type:"string",
        
    },
    email :{
        type:"string",
        
    }, 
    number:{
        type:"string",
       
    }
})

export const formModel=mongoose.model("formdatas",formSchema)
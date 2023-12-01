import Express from 'express';
import { formModel } from '../db/model.js';
import {v4} from 'uuid'

export const formdataRouter=Express.Router();

formdataRouter.post('/', async(req, res) =>{
    const payload=req.body;
    try{
       const data= await formModel.create({...payload, id:v4()});
    if(data){
        res.status(200).send(data);
    }
    } catch(err){
        console.log(err);
    }
})



formdataRouter.get('/', async(req, res) =>{
    const payload=req.body;
    try{
        const getdata= await formModel.find({});
        if(getdata){
            res.status(200).send(getdata);
        } 
    } catch(err){
        console.error(err);
    }
})


formdataRouter.put('/:id', async(req,res) =>{
    const payload=req.body;
    const {id}=req.params;
    try{
        const updateData= await formModel.findOneAndUpdate({id:id}, {...payload});
        if(updateData){
            res.status(200).send(updateData);
        } else{
            res.send("data not updated");
        }

    } catch(err){
        console.log(err);
    }

})


formdataRouter.delete('/:id', async(req, res) => {
    const payload= req.body;
    const {id}= req.params;

     try{
        const deleteData= await formModel.deleteOne({id:id}, {...payload});

        if (deleteData){
            res.status(200).send("Data deleted successfully")
        } else {
            res.send("Error occurred while deleting")
     } }
     catch(err){
        console.error(err);
     }

})
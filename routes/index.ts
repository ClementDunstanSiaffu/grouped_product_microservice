
import { Request,Response } from "express";
import mongoose from "mongoose";
const GroupedProductDbInstance = mongoose.model("GROUPED_PRODUCTS");
import {AppType} from '../types/'

class Routes{

    getGroupedProductRoutes(app:AppType){
        
        app.post("/postGroupedProducts",async(req:Request,res:Response)=>{
            let currentDbInstnace = GroupedProductDbInstance.findOne({id:req.body.where.fixedId})
            let dbInstance;
            if (!currentDbInstnace){
                const groupedProductDbInstance = new GroupedProductDbInstance(req.body.where);
                groupedProductDbInstance.save((err,docs)=>{
                    if(!err){
                        res.status(200).json({"status":true})
                    }else{
                        res.status(400).json({"status":false});
                    }
                })
            }else{
                dbInstance = await GroupedProductDbInstance.replaceOne(currentDbInstnace,req.body)
                res.json({"status":"already saved"});
            }
        })

        app.post("/getGroupedProducts",(req:Request,res:Response)=>{
            GroupedProductDbInstance.find((err,docs)=>{
                if(!err){
                    res.status(200).json(docs);
                }else{
                    res.status(400).json({"status":false});
                }
            })
        })
    }
}

module.exports = new Routes();
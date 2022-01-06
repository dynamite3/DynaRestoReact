import express, { response } from "express"

const router=express.Router();
import { createConnection } from "../index.js"



router.post("/addtransaction",async(req,res) =>{
    const data=req.body
    console.log(data)
    data.createdat=Date()
    const result = await addtransaction(data)
    res.send(result)
})
async function addtransaction(data){
    const client = await createConnection();
    const result = await client
        .db("DynaResto")
        .collection("billing")
        .insertOne(data)
    return result;
}

export{router}
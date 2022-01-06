import express, { response } from "express"

const router=express.Router();
import { createConnection } from "../index.js"


router.post("/addproducts",async(req,res) =>{
    const data={
        itemName:req.body.itemName,
        category:req.body.category,
        type:req.body.type,
        prize:req.body.prize,
        description:req.body.description,
        picurl:req.body.picurl
    }
    const result = await addproduct(data)
    res.send(result)
})
async function addproduct(data){
    const client = await createConnection();
    const result = await client
        .db("DynaResto")
        .collection("Products")
        .insertOne(data)
    return result;
}


router.get("/getAllproducts",async(req,res) =>{
    const result = await getallitems()
    res.send(result)
})
async function getallitems(){
    const client = await createConnection();
    const result = await client
        .db("DynaResto")
        .collection("Products")
        .find({})
        .toArray()
    return result;
}

export{router}
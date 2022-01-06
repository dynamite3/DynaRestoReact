import express, { response } from "express"

const router=express.Router();
import { createConnection } from "../index.js"

router.get("/gettabledetails",async(req,res) =>{
    const client = await createConnection();
    const result = await client
        .db("DynaResto")
        .collection("tabledata")
        .find({})
        .toArray()
    res.send(result)
})

router.post("/addproducts",async(req,res) =>{
    const data={
        name:req.body.name,
        id:req.body.id,
        selecteditem:req.body.selecteditem,
        status:"active",
        createdAt:Date()
    }
    const result = await addproduct(data)
    res.send(result)
})

async function addproduct(data){
    const client = await createConnection();
    const result = await client
        .db("DynaResto")
        .collection("tabledata")
        .insertOne(data)
    return result;
}

router.post("/updateproducts",async(req,res) =>{
    const data={
        name:req.body.name,
        id:req.body.id,
        selecteditem:req.body.selecteditem,
        status:"active"
    }
    const result = await updateproduct(data)
    res.send(result)
})
async function updateproduct(data){
    const client = await createConnection();
    const result = await client
        .db("DynaResto")
        .collection("tabledata")
        .updateOne({id:data.id},{$set:{selecteditem:data.selecteditem}})
    return result;
}


router.post("/getdatails",async(req,res) =>{
    const id=req.body.id
    const result = await getdetails(id)
    res.send(result)
})

async function getdetails(id){
    const client = await createConnection();
    const result = await client
        .db("DynaResto")
        .collection("tabledata")
        .findOne({id:id})
    return result;
}
router.post("/clear",async(req,res) =>{
    const id=req.body.id
    console.log(id)
    const result = await cleartable(id)
    res.send(result)
})

async function cleartable(id){
    const client = await createConnection();
    const result = await client
        .db("DynaResto")
        .collection("tabledata")
        .deleteOne({id:id})
    return result;
}










export{router}
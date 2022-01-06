import express, { request, response } from"express";
import {MongoClient,ObjectId} from "mongodb";
import dotenv from "dotenv";
import cors from "cors";

import {router as ProductRouter} from "./routes/product.js"
import {router as TableRouter} from "./routes/table.js"
import { router  as transcationRouter} from "./routes/bill.js";


const app=express();
dotenv.config();

app.use(cors())
app.use(express.json());

const PORT=process.env.PORT;
const MONGO_URL=process.env.MONGO_URL;

app.listen(PORT,()=>console.log("server started"))


app.get("/",(request,response)=>{
    response.send("Hello from Express JS")
})

export async function createConnection() {
    const client = new MongoClient(MONGO_URL);
    await client.connect();
    return client;
}

app.use("/product", ProductRouter)
app.use("/table", TableRouter)
app.use("/transcation", transcationRouter)

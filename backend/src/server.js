import express from "express"
import cors from "cors"
import {prisma} from "./lib/prisma.ts"

const app = express()
app.use(express.json())
app.use(cors())

const PORT = 3000

app.get("/users", async (req, res) =>{
    const user = await prisma.user.findMany()
    res.json(user)
})

app.post("/users", async (req, res) =>{
    const user = await prisma.user.create({
        data: req.body,
    })
    res.json(user)
})

app.put("/users:id", async (req, res) =>{
    const user = await prisma.user.update({
        where:{id: Number(req.params.id)},
        data: req.body,
    })
    res.json(user)
})

app.delete("/users", async (req, res) =>{
    const user = await prisma.user.delete({
        where:{id: Number(req.params.id)},
    })
    res.jsoj(user)
})

app.listen(PORT, () => {
  console.log("Ta rodando")
})
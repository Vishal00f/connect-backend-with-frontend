import express from "express"
const app = express()

const port = process.env.port || 3000;
app.get("/",(req,res)=>{
    res.send("home")
})
app.get("/api/jokes",(req,res)=>{
    const jokes = [
        {
            id:1,
            title:"Joke 1",
            joke:"this is joke 1"
        },
        {
            id:2,
            title:"Joke 2",
            joke:"this is joke 2"
        },
        {
            id:3,
            title:"Joke 3",
            joke:"this is joke 3"
        }
    ]
    res.send(jokes);
})

app.listen(port,()=>{
    console.log(`server started at port ${port}`);
})
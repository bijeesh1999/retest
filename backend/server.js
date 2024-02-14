const express=require("express")
const cors=require("cors")
const mongoDb=require("./mongoDb/dbConnection")

const port=2000;

const app=express()
app.use(cors())
app.use(express.json())


app.use("/",require("./routes/taskRouter"))

app.listen(port, () => {
    mongoDb()
    console.log(`http://localhost:${port}`)
})
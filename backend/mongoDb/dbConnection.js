const mongoose=require("mongoose")

const mongoDb=()=>{
    const connected=mongoose.connect("mongodb+srv://bijeeshbstackup:bijeesh1999@cluster0.8roueeq.mongodb.net/");
    if(connected){
        console.log("db Connected");
    }
    else{
        console.log("error connection");
    }
}

module.exports =mongoDb;

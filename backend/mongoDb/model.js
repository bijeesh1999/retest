const mongoose=require("mongoose")


const taskSchema = new mongoose.Schema({

    list:[],
    pin: { type: Number },
   }, {
    timestamps: true,
  });


  module.exports = mongoose.model("task",taskSchema);
 

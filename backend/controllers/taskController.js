const task = require("../mongoDb/model");



const addTask = async (req, res) => {
  const {...data} = req.body;
  console.log(data.title,data.type,data.taskData,data.completed);
  const list=[]
  list.push({title:data.title},{type:data.type},{taskData:data.taskData},{completed:data.completed})
  const addedTask = await task.create({list:list,pin:data.pin});
  console.log(task.list);
  if (addedTask) {
    res.status(200).json(addedTask);
  } else {
    res.status(400).json("post failed");
  }
};


const getAllTask= async (req,res)=>{

    const allTask=await task.find()
    if(allTask){
        res.status(200).json(allTask)
    }else{
        res.status(404).json("data not found")
    }
}

const editTask= async (req,res) => {

    const {id}=req.params;
    const {...data}=req.body;
    console.log(id);
      const editedTask= await task.findByIdAndUpdate(id);
      if(editedTask){
          res.status(200).json(editedTask)
      }else{
          res.status(400).json("edited failed")
      }
    }



module.exports={addTask , getAllTask , editTask}

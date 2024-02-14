import React, { useEffect, useState } from "react";
import "./taskForm.css";

function TaskForm() {
  const [multiple, setMultiple] = useState([{ value: "" }]);
  const [single, setSingle] = useState([{ value: "" }]);
  const [newTask, setNewTask] = useState([{ value: "" }]);
  const [type,setType]=useState('')
  const [setpin , setSetPin]=useState(false)
  const [task, setTask] = useState(false);
  const [pin,setPin]=useState({pin:""})
  const array=[];


  // console.log(multiple);
  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedValue = document.getElementById("tasks").value;
    if (selectedValue == "single") {
      setType("single")
      setSingle([...single, { value: "" }]);
    }if (selectedValue == "multiple") {
      setType("multiple")
      setMultiple([...multiple, { value: "" }]);
    }
  };
console.log(type);
  const [singleData, setSingleData] = useState({ 
    title:"",
    type:"",
    task:"",
   },
   );

   const handleChange=(e)=>{
    setSingleData({
      ...singleData,
      [e.target.name]:[e.target.value]
  })
  }

  const addNewTask = (taskType, indesValue) => {
    const updatedMultiple = [...multiple];
    const indexdata = updatedMultiple.map((data, index) => {
      // console.log(data, index);
      if (index == indesValue) {
        setNewTask([...newTask, { value: "" }]);
      }
    });
  };

  const handlePush = ()=>{
    array.push({singleData},{pin})
    alert()
  }



  console.log(array);
  return (
    <>
      <div className="Wraper">
        <h2 className="heading">Task Manager</h2>
        <div className="container" id="container">
          {single.map((data,index) => (
            <div className="task" key={index}>
              <div className="task-block">
                <h2 className="task-heading">Task Type 1: Text Editor</h2>
                <div className="input-container">
                  <textarea
                    id="textTask"
                    name="task"
                    className="task-input"
                    placeholder="Enter text here"
                    // value={singleData.value}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          ))}
          {multiple.map((data, index) => (
            <div className="task" key={index}>
              <div className="task-block">
                <h2 className="task-heading">
                  Task Type 2: Add and Remove Inputs
                </h2>
                <div id="dynamicInputs">
                  <div className="input-container">
                    {newTask.map((data,index) => (
                      <input
                        type="text"
                        className="task-input"
                        placeholder="Input 1"
                        value={multiple.value}
                        key={index}
                      />
                    ))}
                    <button
                      className="add-remove-input"
                      onClick={() => addNewTask("multiple", index)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {task && (
            <div className="addTask">
              <form onSubmit={handleSubmit}>
                <input type="text" name="title" placeholder="title" onChange={handleChange} />
                <select id="tasks" name="type" onChange={handleChange}>
                  <option name="type" value={"single"}>
                    single
                  </option>
                  <option name="type" value={"multiple"}>
                    multiple
                  </option>
                </select>
                <button type="submit">save</button>
              </form>
            </div>
          )}
          {setpin && <div id="myModal2" className="modal">
            <div className="modal-content">
              <span className="close">X</span>
              <h2>Enter Pin</h2>
              <input
                type="text"
                id="blockTitle"
                name="pin"
                className="task-input"
                placeholder="Enter pin"
                onChange={(e) =>{setPin(e.target.value)}}
              />
              <button id="saveBtn"onClick={handlePush}>Save</button>
            </div>
          </div>}
        </div>
        <div className="Button">
          <button id="openModalBtn" onClick={() => setTask(true)}>
            Add Task
          </button>
          <button id="save_tasks" onClick={()=> setSetPin(true)}>Save</button>
        </div>
      </div>
    </>
  );
}

export default TaskForm;

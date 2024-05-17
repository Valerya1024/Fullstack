import { useState } from "react";

function ToDoList() {

    const [tasks, setTasks] = useState(["walk the dog", "take a shower","eat breakfast"]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(e) {
        setNewTask(e.target.value);
    }

    function addTask() {
        if (newTask.trim() !== "") {
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
        
    }

    function removeTask(index) {
        setTasks(t => t.filter((_, i)=> i !== index));
    }

    function moveUpTask(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index-1]] = [updatedTasks[index-1], updatedTasks[index]]
            setTasks(updatedTasks);
        }
    }

    function moveDownTask(index) {
        if (index < tasks.length-1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index+1]] = [updatedTasks[index+1], updatedTasks[index]]
            setTasks(updatedTasks);
        }
        
    }
    return (
        <div className="to-do-list">
            <h1>To do list</h1>
            <ol>
                {tasks.map((task, i)=> <li key={i}>
                    <span className="task-name">{task}</span> &nbsp;
                    <button className="delete-button" onClick={() => removeTask(i)}>delete</button>
                    <button className="move-button" onClick={() => moveDownTask(i)}>↓</button>
                    <button className="move-button" onClick={() => moveUpTask(i)}>↑</button>
                </li>)}
            </ol>
            <input type="text"
                placeholder="enter a task"
                value={newTask}
                onChange={handleInputChange}/>
            <button className="add-button" onClick={addTask} >Add</button>
        </div>
    )
}

export default ToDoList;
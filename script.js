document.addEventListener("DOMContentLoaded", () => {let todo=document.getElementById("taskInput");
 let addtaskbtn=document.getElementById("addTaskBtn");
let todolist=document.getElementById("taskList");


let tasks=  JSON.parse(localStorage.getItem("tasks")) || [];         
tasks.forEach((task)=>renderTask(task));           
addtaskbtn.addEventListener("click",()=>{
   const newwtext=todo.value.trim();
   if (newwtext==="") return ;

    const newtask={
        id:Date.now(),
        text:newwtext,
        completed:false
    }
    tasks.push(newtask);
    saveTasks();
    renderTask(newtask);
    todo.value="";                                                                             
    console.log(tasks);
    alert(`Task Added Successfully! ${newtask.text}`);                        

});

function saveTasks(){
    localStorage.setItem("tasks",JSON.stringify (tasks)); 
}

function renderTask(task){  
    const li = document.createElement("li");
    li.setAttribute("data-id", task.id);
    if (task.completed) li.classList.add("completed");
    li.innerHTML = `
    <span>${task.text}</span>
    <button>delete</button>
    `;
    li.addEventListener("click", (e) => {
      if (e.target.tagName === "BUTTON") return;
      task.completed = !task.completed;
      li.classList.toggle("completed");
      saveTasks();
    });

    li.querySelector("button").addEventListener("click", (e) => {
      e.stopPropagation(); //prevent toggle from firingggg
      tasks = tasks.filter((t) => t.id === task.id);
      li.remove();
      saveTasks();
    });

    todolist.appendChild(li);
  }

});
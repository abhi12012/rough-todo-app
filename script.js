let addBtn = document.getElementById("addBtn");
let taskInput = document.getElementById("taskInput");
let taskList = document.getElementById("taskList");


addBtn.onclick = function () {
   
    let task = taskInput.value;


    if (task === "") {
        alert("Task likho pehle!");
        return;
    }


    let li = document.createElement("li");
    li.textContent = task;


   


    taskList.appendChild(li);


    taskInput.value = "";
};


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


   function deleteCheckedTasks() {
  let tasks = document.querySelectorAll("li");

  tasks.forEach(function (task) {
    let checkbox = task.querySelector(".taskInput");

    if (taskInput && checkbox.checked) {
      task.remove(); // sirf checked task delete hoga
    }
  });
}


    taskList.appendChild(li);


    taskInput.value = "";
};

console.log("Feature Branch");
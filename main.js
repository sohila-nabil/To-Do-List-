let input1 = document.getElementById("input1");
let addbtn = document.getElementById("add");
let taskList = document.getElementById('task-list')


addbtn.onclick = function () {
  if (input1.value === '') {
    alert('pelease enter something to do')
  }
  else {
    let li = document.createElement("li")
    li.innerHTML = input1.value;
    taskList.appendChild(li)
    let span = document.createElement("span")
    span.innerHTML = "\u00d7";
    li.appendChild(span)
  }
  input1.value = '';
  saveData();
  
};

taskList.addEventListener("click", function(e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  }
  else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
}, false);

function saveData() {
  localStorage.setItem("tasks", taskList.innerHTML)
}

function showTasks() {
  taskList.innerHTML = localStorage.getItem("tasks");
}

showTasks();
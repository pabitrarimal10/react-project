const todoList = [
    {
        name: "Read for exam",
         isComplete: false,
    },
    {
        name: "complete your research project",
        isComplete: true,
    },
    {
        name:"complete html day 1",
        isComplete: true,
    }
]
todoList.push({
    name:"My new task",
    isComplete: false,
})
todoList[0].isComplete = true;

const myListItems = document.getElementById("task-list");

for (let task of todoList) {

    const newTask = document.createElement("li");

    newTask.innerHTML= task.name; 
      
    if(task.isComplete){
        newTask.className="complete";
    }else{
        newTask.className="incomplete";
    }
const buttonToChange=document.createElement("button");
buttonToChange.innerHTML= task.isComplete? "Revert":"Mark as done";
    // buttonToChange.innerHTML = task.isComplete ? "inomplete" : "incomplete";
myListItems.appendChild(newTask);
myListItems.appendChild(buttonToChange);

}

const button = document.getElementById("add-btn");
const textInput = document.getElementById("text-input");

 button.addEventListener("click", function() { 
    const newTask=document.createElement("li");
    const newTaskName=textInput.value;

    console.log(newTaskName)

    newTask.innerHTML=newTaskName;
 
    newTask.className ="incomplete";
    myListItems.appendChild(newTask);
    const buttonToChange=document.createElement("button");

    buttonToChange.innerHTML ="Mark as done";
    myListItems.appendChild(buttonToChange);

 })

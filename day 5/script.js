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
    name: "My new task",
    isComplete: false
})

todoList[0].isComplete = true;

const myListItems = document.getElementById("task-list");

for (let task of todoList) {
    const newTask = document.createElement("li");
    newTask.innerHTML = task.name;

    if (task.isComplete) {
        newTask.className = "complete"
    } else {
        newTask.className = "incomplete"

    }

    const buttonToChange = document.createElement("button");
    buttonToChange.innerHTML = task.isComplete ? "Revert" : "Mark as done"

    newTask.className = task.isComplete ? "complete" : "incomplete";

    myListItems.appendChild(newTask); myListItems.appendChild(buttonToChange);

    buttonToChange.addEventListener("click", () => {
        newTask.classList.toggle("complete")
        if (buttonToChange.innerHTML == "Revert") {
            buttonToChange.innerHTML = "Mark as done"
        } else {
            buttonToChange.innerHTML = "Revert"
        }
    })
}

const button = document.getElementById("add-btn");
const textInput = document.getElementById("my-text-input");


button.addEventListener("click", () => {
    const newTask = document.createElement("li");
    const newTaskName = textInput.value;

    console.log(newTaskName)

    newTask.innerHTML = newTaskName.className;

    textInput.value = "";

    newTask.className = "incomplete"

    myListItems.appendChild(newTask);

    const buttonToChange = document.createElement("button");

    buttonToChange.innerHTML = "Mark as done"

    myListItems.appendChild(buttonToChange);

})
button.addEventListener("click", () => {
    const newTaskName = textInput.value.trim();

    if (newTaskName === "") return;

    addTaskToList(newTask.className, false);
    textInput.value = "";
});


// const todoList = [
//     { name: "Read for exam", isComplete: false },
//     { name: "complete your research project", isComplete: true },
//     { name: "complete html day 1", isComplete: true }
// ];

// todoList.push({
//     name: "My new task",
//     isComplete: false
// });

// todoList[0].isComplete = true;

// const myListItems = document.getElementById("task-list");

// function renderTask(task) {
//     const li = document.createElement("li");
//     li.innerHTML = task.name;
//     li.className = task.isComplete ? "complete" : "incomplete";

//     const btn = document.createElement("button");
//     btn.innerHTML = task.isComplete ? "Complete" : "Mark as done";

//     btn.addEventListener("click", function () {
//         task.isComplete = !task.isComplete;

//         li.className = task.isComplete ? "complete" : "incomplete";
//         btn.innerHTML = task.isComplete ? "Complete" : "Mark as done";
//     });

//     myListItems.appendChild(li);
//     myListItems.appendChild(btn);
// }

// /* Load existing tasks */
// for (let task of todoList) {
//     renderTask(task);
// }

// /* Add new task */
// const button = document.getElementById("add-btn");
// const textInput = document.getElementById("text-input");

// button.addEventListener("click", function () {
//     if (textInput.value === "") return;

//     const newTask = {
//         name: textInput.value,
//         isComplete: false
//     };

//     todoList.push(newTask);
//     renderTask(newTask);

//     textInput.value = "";
// });



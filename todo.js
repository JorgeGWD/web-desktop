document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const deleteCompletedBtn = document.getElementById("deleteCompletedBtn");
    const taskList = document.getElementById("taskList");

    addTaskBtn.addEventListener("click", function () {
        const taskText = taskInput.value.trim();

        if (taskText !== "") {
            const li = document.createElement("li");
            li.textContent = taskText;

            li.addEventListener("click", function () {
                li.classList.toggle("completed");
            });

            taskList.appendChild(li);

            taskInput.value = "";

            if (taskList.childElementCount === 0) {
                taskList.style.display = "none";
            } else {
                taskList.style.display = "flex";
            }
        }
    });

    deleteCompletedBtn.addEventListener("click", function () {
        const completedTasks = document.querySelectorAll(".completed");

        completedTasks.forEach(function (task) {
            task.remove();
        });

        if (taskList.childElementCount === 0) {
            taskList.style.display = "none";
        } else {
            taskList.style.display = "flex";
        }
    });
});
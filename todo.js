document.addEventListener("DOMContentLoaded", function() {
    // Elementos del DOM
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const deleteCompletedBtn = document.getElementById("deleteCompletedBtn");
    const taskList = document.getElementById("taskList");

    // Evento para agregar una tarea
    addTaskBtn.addEventListener("click", function() {
      const taskText = taskInput.value.trim();

      if (taskText !== "") {
        // Crear elemento de lista
        const li = document.createElement("li");
        li.textContent = taskText;

        // Añadir evento para marcar como completada
        li.addEventListener("click", function() {
          li.classList.toggle("completed");
        });

        // Añadir elemento de lista a la lista de tareas
        taskList.appendChild(li);

        // Limpiar el campo de entrada
        taskInput.value = "";
      }
    });

    // Evento para eliminar tareas completadas
    deleteCompletedBtn.addEventListener("click", function() {
      const completedTasks = document.querySelectorAll(".completed");

      completedTasks.forEach(function(task) {
        task.remove();
      });
    });
});



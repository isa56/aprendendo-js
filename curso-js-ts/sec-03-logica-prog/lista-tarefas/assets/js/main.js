function handleToDoList() {
  // Elements:
  const taskInput = document.querySelector("input");
  const taskList = document.querySelector(".tarefas");

  // Variáveis:
  const tasks = [];

  // Events:
  document.addEventListener("click", (e) => {
    const trgt = e.target;

    if (trgt.className === "btn-tarefa") {
      handleAddFromInput();
    } else if (trgt.className === "btn-apagar") {
      handleRemove(trgt);
    }
  });

  taskInput.addEventListener("keyup", (e) => {
    if (e.key === "Enter") handleAddFromInput();
  });

  // Funções:

  function handleSaveToLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  function handleAddFromLocalStorage() {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    tasks.forEach((task) => {
      handleAdd(task);
    });
  }

  function handleAddFromInput() {
    const name = taskInput.value;
    if (!name || name.length < 3) {
      return;
    }
    taskInput.value = "";
    handleAdd(name);
  }

  function handleAdd(name) {
    tasks.push(name);
    const task = document.createElement("li");
    const removalBtn = document.createElement("button");
    const textEl = document.createElement("p");
    textEl.textContent = name;
    removalBtn.className = "btn-apagar";
    removalBtn.textContent = "Apagar";
    task.appendChild(textEl);
    task.appendChild(removalBtn);
    taskList.appendChild(task);

    handleSaveToLocalStorage();
  }

  function handleRemove(btnTarget) {
    const taskLi = btnTarget.parentNode;
    taskList.removeChild(taskLi);

    const taskName = taskLi.getElementsByTagName("p")[0].textContent;

    tasks.splice(tasks.indexOf(taskName), 1);
    handleSaveToLocalStorage();
  }

  handleAddFromLocalStorage();
}

handleToDoList();

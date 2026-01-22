async function loadTasks() {
  const res = await fetch("/api/tasks");
  const tasks = await res.json();

  const list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");

    const text = document.createElement("span");
    text.innerText = task.name;

    const editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    editBtn.onclick = () => updateTask(index, task.name);

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.onclick = () => deleteTask(index);

    li.appendChild(text);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    list.appendChild(li);
  });
}

async function updateTask(index, currentName) {
  const newName = prompt("Edit task:", currentName);
  if (!newName) return;

  await fetch(`/api/tasks/${index}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: newName })
  });

  loadTasks();
}

async function deleteTask(index) {
  await fetch(`/api/tasks/${index}`, {
    method: "DELETE"
  });

  loadTasks();
}

loadTasks();
function addTask1(): void {
  const input = document.getElementById("taskInput") as HTMLInputElement | null;
  if (!input) return;

  const taskText: string = input.value.trim();
  if (taskText === "") return;

  const taskDiv: HTMLDivElement = document.createElement("div");
  taskDiv.className = "task";
  taskDiv.onclick = () => taskDiv.classList.toggle("completed");

  const span: HTMLSpanElement = document.createElement("span");
  span.textContent = taskText;

  const deleteBtn: HTMLButtonElement = document.createElement("button");
  deleteBtn.className = "delete-btn";
  deleteBtn.textContent = "Delete";
  deleteBtn.onclick = (e: MouseEvent) => {
    e.stopPropagation();
    taskDiv.remove();
  };

  taskDiv.appendChild(span);
  taskDiv.appendChild(deleteBtn);

  const taskList = document.getElementById("taskList");
  if (taskList) {
    taskList.appendChild(taskDiv);
  }

  input.value = "";
}

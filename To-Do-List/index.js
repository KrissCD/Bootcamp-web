function addTask() {
      const input = document.getElementById("taskInput"); // task input sa id 
      const taskText = input.value.trim(); 
      if (taskText === "") return; // ak je prazno ignore

      const taskDiv = document.createElement("div"); //div element 
      taskDiv.className = "task"; // task za css
      taskDiv.onclick = () => taskDiv.classList.toggle("completed"); //za prekrizit

      const span = document.createElement("span"); 
      span.textContent = taskText;

      const deleteBtn = document.createElement("button"); //delete button
      deleteBtn.className = "delete-btn"; //za css stil
      deleteBtn.textContent = "Delete";
      deleteBtn.onclick = (e) => {
        e.stopPropagation(); //da nemoze biti completed
        taskDiv.remove();
      };

      taskDiv.appendChild(span); //dodaje task i delete button in kontainer
      taskDiv.appendChild(deleteBtn); //append na element sa id tasklist
      document.getElementById("taskList").appendChild(taskDiv);
      input.value = ""; //resetiranje input feilda
    }
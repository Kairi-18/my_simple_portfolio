function addTask() {
  const newTaskText = document.getElementById("new-task").value;
  if (newTaskText.trim() !== "") {
      const newItem = document.createElement("li");
      newItem.textContent = newTaskText;

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.className = "delete-button";
      deleteButton.onclick = function() {
          newItem.remove();
      };

      newItem.appendChild(deleteButton);
      document.getElementById("todo-list").appendChild(newItem);
      document.getElementById("new-task").value = "";
  }
}
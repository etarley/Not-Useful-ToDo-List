let input;
const tasks = [];
const t = {};
do {
  input = prompt("What would you like to do?");
  if (input === "new") {
    newTask = prompt("Enter new task");
    tasks.push(newTask);
    console.log(`${newTask} was added to the list.`);
  } else if (input === "list") {
    console.log("**********");
    for (let i = 0; i < tasks.length; i++) {
      console.log(`${i}: ${tasks[i]}`);
    }
    console.log("**********");
  } else if (input === "delete") {
    tasks.splice(prompt("Enter Index of task to delete"), 1);
    console.log("Todo Removed");
  }
} while (input !== "quit");
console.log("OK, YOU QUIT THE APP");

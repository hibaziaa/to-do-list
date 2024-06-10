#! /usr/bin/env node
import inquirer from "inquirer";
let toDoList: string[] = [];
let exit = false;

while (!exit) {
  const action = await inquirer.prompt([
    {
      name: "usersSelection",
      type: "list",
      message: "What would you like to do?",
      choices: [
        "Add a task",
        "Remove the last task",
        "View your to do list",
        "Exit",
      ],
    },
  ]);

  if (action.usersSelection === "Add a task") {
    const task = await inquirer.prompt([
      {
        name: "usersTask",
        type: "input",
        message: "Enter your task to do:",
      },
    ]);
    toDoList.push(task.usersTask);
    console.log(`${task.usersTask} added to the list.`);
  } else if (action.usersSelection === "View your to do list") {
    if (toDoList.length > 1) {
      console.log(toDoList);
    } else {
      console.log("Your To Do List is empty, add some tasks !");
    }
  } else if (action.usersSelection === "Remove the last task") {
    if (toDoList.length > 0) {
      const removedTask = toDoList.pop();
      console.log(`Task "${removedTask}" removed from the list.`);
    } else {
      console.log("No tasks to remove.");
    }
  } else if (action.usersSelection === "Exit") {
    exit = true;
    console.log("Goodbye!");
  }
}

// ToDo List using Array method ,
// Use start date and end time of the each task ,
// add. Edit , List , Delete functionality should be there .
// use map , filter and cover all the concepts thatope you have learned in last week .

let tasks = [];

function addTask(taskName, startDate, endDate) {
  let exit = 1;
  //can add n number of tasks
  while (exit == 1) {
    console.log("Enter task here");
    taskName = prompt("enter the task");
    startDate = prompt("enter the start date");
    endDate = prompt("enter the enddate");
    tasks.push({ name: taskName, start: startDate, end: endDate });
    console.log("Task added");
    exit = prompt("enter 1 for add another task");
  }
}

function readTask() {
  tasks.map((task, id) =>
    console.log(
      `Task ${id + 1} ${task.name} starts on ${task.start} ends on ${task.end}`
    )
  );
}

function deleteTask() {
  let exit = 1;
  // can delete n number of tasks
  while (exit == 1) {
    let taskId = prompt("enter the task id to delete it");
    let delId = taskId - 1;
    taskId >= 0 && taskId < tasks.length
      ? tasks.splice(delId, 1)
      : console.log("Task not found");
    tasks.map((task, id) =>
      console.log(
        `After deletion Task ${id + 1} ${task.name} starts on ${
          task.start
        } ends on ${task.end}`
      )
    );
    exit = prompt("enter 1 for delete another task");
  }
}

function editTask() {
  let exit = 1;
  while (exit == 1) {
    let taskId = prompt("enter the task id to edit");
    let editId = taskId - 1;
    if (taskId >= 0 && taskId < tasks.length) {
      let edittask = prompt("edit the task");
      let editstart = prompt("edit the start date");
      let editend = prompt("edit the end date");
      tasks[editId] = { name: edittask, start: editstart, end: editend };
    } else {
      console.log("task not found");
    }
    tasks.map((task, id) =>
      console.log(
        `Task ${id + 1} ${task.name} starts on ${task.start} ends on ${
          task.end
        }`
      )
    );
    exit = prompt("enter 1 for edit another task");
  }
}

addTask();
readTask();
deleteTask();
editTask();

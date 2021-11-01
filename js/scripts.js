// Logic for ToDoList()
function ToDoList() {
  this.taskItems = {};
  this.currentId = 0;
}

ToDoList.prototype.assignId = function(){
  this.currentId += 1;
  return this.currentId;
};

ToDoList.prototype.addListItem = function(taskItem) {
  taskItem.id = this.assignId();
  this.taskItems[taskItem.id] = taskItem;
};

ToDoList.prototype.findTask = function(id) {
  if (this.taskItems[id] != undefined) {
    return this.taskItems[id];
  }
  return false;
};

ToDoList.prototype.deleteTask = function(id) {
  if(this.taskItems[id] === undefined) {
    return false;
  }
  delete this.taskItems[id];
  return true;
};
// Logic for TaskItem()
function Task(taskName, dueDate, importanceInt){
  this.taskName = taskName;
  this.dueDate = dueDate;
  this.importanceInt = importanceInt;
} 

let toDoList = new ToDoList();

function displayTaskDetails(toDoListToDisplay){
  let output = $(".output");
  let htmlForTaskDetail = "";
  let htmlForCheckboxInput = "";
  let htmlForCheckboxLabel = "";
  Object.keys(toDoListToDisplay.taskItems).forEach(function(key){
    const taskItem = toDoListToDisplay.findTask(key);
    htmlForTaskDetail += "<li class=" + taskItem.id + ">" + taskItem.taskName + " " + taskItem.dueDate + " " + taskItem.importanceInt + "</li>";
    //htmlForCheckboxInput += "<input class= form-check-input " + taskItem.id + "type='checkbox'" + " " + "id='flexCheckDefault'" + ">";
    htmlForCheckboxLabel += "<label class= form-check-label " + taskItem.id + "for='flexCheckDefault'" + ">" + "Done?" + "</label>";
  });
  output.html(htmlForTaskDetail);
  //output.append(htmlForCheckboxInput);
  //output.append(htmlForCheckboxLabel);

}

$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
    const inputtedTaskName = $("input#taskInfo").val();
    const inputtedTaskDueDate = $("input#taskDate").val();
    const inputtedTaskImportance = $("select#taskImportance").val();
    let newTask = new Task(inputtedTaskName, inputtedTaskDueDate, inputtedTaskImportance);
    toDoList.addListItem(newTask);
    displayTaskDetails(toDoList);
    $("#submitTask").click(function(){
      $(".addTaskGroup").hide();
    });
  });
  $("#addTask").click(function(){
    $(".addTaskGroup").show();
  });
});
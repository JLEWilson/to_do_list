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

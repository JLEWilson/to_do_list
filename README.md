# _To Do List_

#### By _**Jacob Wilson**_

#### _A brief description of the project._

## Technologies Used

* _HTML_
* _JavaScript_
* _CSS_
* _Markdown_
* _Bootstrap_
* _JQuery_

## Description

_A detailed description of the project._

## Setup/Installation Requirements

Leave nothing to chance!

* _You can find the github repository [here]()_
* _Clone the repository to your computer_
* _Open the index.html file in a browser_
* _OR_
* _You can find the project on github pages[here]()_

## Known Bugs

* _No known bugs_

## Tests

Describe: Task()

Test: It will define key value pairs.
Code: let newTask = new Task(parameters);
Output: newTask; > parameters

Describe: ToDoList()

Test: It will create an empty ToDoList object called taskItems.
Code: let list1 = new ToDoList()
Output: list1; > list1 {taskItems{}}

Test: It will add Task to ToDoList.taskItems;
Code: let toDoList = new ToDoList();
      let task1 = new Task("vacuum", "today", 1);
      toDoList.addListItem(task1)
      ToDoList.listItems;
output: {taskItem1};
Note: Created addTaskItem() here;


Describe addListItem()

Test: It will add Task object to ToDoList.listItems;
Code: let toDoList = new ToDoList();
      let task1 = new Task("vacuum", "today", 1);
      toDoList.addListItem(task1)
      ToDoList.listItems;
output: {taskItem1};
    

Describe: assignId()

Test it will add an id at the current ToDoList.currentId and increment currentId by 1
code: let toDoList = new ToDoList();
      let task1 = new Task("vacuum", "today", 1);
      toDoList.addListItem(task1)
      ToDoList.listItems;
      ToDoList;
output: {taskItems: {...}, currentId:1};

Describe: findTask()

Test: It will locate a taskItems by the unique number id assigned to it.
Code: findTask(1);
Expected Output: Task {taskName: 'vacuum', dueDate: 'today', importanceInt: 1, id: 1;

Test: It will return false if the id is undefined.
Code: findTask(4000);
Expected Output: false

Describe: deleteTask()

Test: It will find a taskItems from ToDoList by using the unique number ID assigned to it.
Code: deleteTask(1);
Expected Output: Task {taskName: 'vacuum', dueDate: 'today', importanceInt: 1, id: 1;

Test: It will delete a taskItems from ToDoList if it finds the item based on the unique number ID assigned to it and return true.
Code: deleteTask(1);
Expected Output: true

Test: It will return false if the id is undefined.
Code: findTask(4000);
Expected Output: false
 
## License - [MIT](https://opensource.org/licenses/MIT)

_If you run into any problems or find a bug, would like to reach me for a separate reason, feel free to send me an email @jacobleeeugenewilson@gmail.com with details of your issue._

Copyright (c) _Date_ _Jacob Wilson(s)_
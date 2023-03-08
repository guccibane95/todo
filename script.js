const container = document.querySelector('.container');
function testDom() {
  const testDiv = document.createElement('div');
  testDiv.innerHTML = 'hello';
  container.append(testDiv);
}

function domAddItem(title, description, dueDate, priority) {
  const itemDiv = document.createElement('div');
  itemDiv.classList.add('item-div');
  container.append(itemDiv);
  const itemTitleDiv = document.createElement('div');
  const itemDescriptionDiv = document.createElement('div');
  const itemDueDateDiv = document.createElement('div');
  const itemPriorityDiv = document.createElement('div');
  itemTitleDiv.innerHTML = `Title: ${title}`;
  itemDescriptionDiv.innerHTML = `Info: ${description}`;
  itemDueDateDiv.innerHTML = `Due Date: ${dueDate}`;
  itemPriorityDiv.innerHTML = `Priority: ${priority}`;
  itemDiv.append(itemTitleDiv, itemDescriptionDiv, itemDueDateDiv, itemPriorityDiv);
}

function CreateToDoItem(title, description, dueDate, priority) {
  this.title = title;
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority;
  domAddItem(title, description, dueDate, priority);
}

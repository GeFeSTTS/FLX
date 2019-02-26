const rootNode = document.getElementById('root');
let todoItems = [];

const methods = {
  add(description) {
    const id = 'task_' + +new Date();
    const item = {description, id, isDone: false};

    todoItems.push(item);
    localStorage.setItem('todoItems', JSON.stringify(todoItems));

    return todoItems;
  },

  getAll() {
    return JSON.parse(localStorage.getItem('todoItems'));
  },

  getById(id) {
    return this.getAll().find(item => item.id === id);
  },

  getDone() {
    return this.getAll().filter(item => item.isDone === true);
  },

  getUndone() {
    return this.getAll().filter(item => item.isDone === false);
  },

  getSorted() {
    return this.getUndone().concat(this.getDone());
  },

  setAsDoneById(id) {
    const updatedList = this.getAll().map(item => {
      if (item.id === id) {
        item.isDone = true;
      }

      return item;
    });

    localStorage.setItem('todoItems', JSON.stringify(updatedList));

    return todoItems;
  },

  changeDescription(id, description) {
    const updatedList = this.getAll().map(item => {
      if (item.id === id) {
        item.description = description;
      }

      return item;
    });

    localStorage.setItem('todoItems', JSON.stringify(updatedList));

    return todoItems;
  },

  removeById(id) {
    const updatedList = this.getAll().filter(item => item.id !== id);

    localStorage.setItem('todoItems', JSON.stringify(updatedList));

    return todoItems;
  }
};

const template = {
  main(todoItems) {
    const mainSection = document.createElement('section');
    mainSection.id = 'main-section';

    const h1Element = document.createElement('h1');
    h1Element.innerText = 'Simple TODO application';

    const addBtn = document.createElement('button');
    addBtn.id = 'add-new-task';
    addBtn.innerText = 'Add new task';

    const toDoList = document.createElement('ul');
    toDoList.id = 'todo-list';

    const emptyList = document.createElement('p');
    emptyList.classList.add('empty-todo');
    emptyList.innerText = 'TODO is empty';

    addBtn.onclick = () => {
      window.location.hash = '/add';
    };

    mainSection.appendChild(h1Element);
    mainSection.appendChild(addBtn);
    mainSection.appendChild(toDoList);
    mainSection.appendChild(emptyList);

    if (todoItems.length) {
      for (let item of todoItems) {
        const li = document.createElement('li');
        li.id = item.id;

        const checkbox = document.createElement('button')
        checkbox.classList.add('checkbox-undone');

        if (item._isDone) {
            checkbox.className = 'checkbox-done';
        } else {
            checkbox.className = 'checkbox-undone';
        }

        const toDoText = document.createElement('button');
        toDoText.classList.add('todo-text');
        toDoText.innerText = item.description;

        const remove = document.createElement('button');
        remove.classList.add('remove');

        checkbox.onclick = () => {
          if (checkbox.className === 'checkbox-undone') {
            checkbox.className = 'checkbox-done';
            methods.setAsDoneById(item.id);
            toDoList.appendChild(li);
          }
        };

        toDoText.onclick = () => {
          window.location.hash = `/modify/${item.id}`;
        };

        remove.onclick = () => {
          li.remove();
          methods.removeById(item.id);
        };

        li.appendChild(checkbox);
        li.appendChild(toDoText);
        li.appendChild(remove);

        toDoList.appendChild(li);
      }
    }

    return mainSection;
  },

  add() {
    const section = document.createElement('section');
    section.id = 'add-section';  

    const h1Element = document.createElement('h1');
    h1Element.innerText = 'Add task';

    const input = document.createElement('input');
    input.size = '40';
    input.type = 'text';
    input.placeholder = 'Task description';

    const footer = document.createElement('footer');

    const cancelBtn = document.createElement('button');
    cancelBtn.classList.add('cancel-btn');
    cancelBtn.innerText = 'Cancel';
    
    const saveBtn = document.createElement('button');
    saveBtn.classList.add('save-changes-btn');
    saveBtn.disabled = true;
    saveBtn.innerText = 'Save changes'; 


    input.onchange = input.onkeyup = () => {
      const description = input.value.trim();

      saveBtn.disabled = !description;

      if (event.code === 'Enter' && description) {
        saveBtn.click();
      }
    };

    cancelBtn.onclick = () => {
      window.location.hash = '/main';
    };

    saveBtn.onclick = () => {
      methods.add(input.value.trim());
      window.location.hash = '/main';
    };

    footer.appendChild(cancelBtn);
    footer.appendChild(saveBtn);

    section.appendChild(h1Element);
    section.appendChild(input);
    section.appendChild(footer);

    return section;
  },

  modify(item) {
    const section = this.add();
    
    section.id = 'modify-section';
    section.querySelector('h1').textContent = 'Modify item';
    section.querySelector('input').value = item.description;
    section.querySelector('.save-changes-btn').onclick = () => {
      methods.changeDescription(item.id, section.querySelector('input').value.trim());
      window.location.hash = '/main';
    };

    return section;
  }
};

const route = {
  load() {
    const hash = window.location.hash;

    if (hash.endsWith('/add')) {
      this.add();
    } else if ((/\/modify\/task_\d+$/).test(hash)) {
      const id = hash.slice(hash.lastIndexOf('/') + 1);
      this.modify(id);
    } else {
      this.main();
    }
  },

  main() {
    window.history.pushState('', '/', window.location.pathname);

    document.title = 'Main page';

    rootNode.innerHTML = '';
    rootNode.appendChild(template.main(todoItems));
  },

  add() {
    document.title = 'Add new task';

    rootNode.innerHTML = '';
    rootNode.appendChild(template.add());
  },

  modify(id) {
    const item = methods.getById(id);

    document.title = `Modify ${item.description}`;

    rootNode.innerHTML = '';
    rootNode.appendChild(template.modify(item));
  }
};

window.onload = window.onhashchange = () => {
  if (localStorage.getItem('todoItems')) {
    todoItems = methods.getSorted();
  }

  route.load();
};
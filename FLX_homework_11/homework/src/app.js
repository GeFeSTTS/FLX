const maxItems = 10;
const zero = 0;
const two = 2;

const inputField = document.getElementById('inputside');
const addBtn = document.querySelector('.addBtn');
const ulListItem = document.querySelector('.listBox');
const error = document.querySelector('.error');

let counterItems = 0;
let dragging = null;

const checkKeyUp = () => {
    if (!inputField.value.trim()) {
        addBtn.disabled = true;
    } else {
        addBtn.disabled = false;
    }
};

const checkOnClick = () => {
    updateList(inputField.value.trim());
};

const isMaxItemsInList = () => {
    if (++counterItems >= maxItems) {
        inputField.disabled = true;
        addBtn.disabled = true;
        error.style.display = 'block';
    }
}

function updateList() {
    const liItem = document.createElement('li');
    const liNode = document.createTextNode(inputField.value);
    const setIcn = document.createElement('i');
    const checkBxT = document.createTextNode('check_box_outline_blank');
    const setBtn = document.createElement('button');
    const delIcn = document.createElement('i');
    const delTxt = document.createTextNode('delete');
    const delBtn = document.createElement('button');

    liItem.className = 'listBox-item';
    liItem.setAttribute('draggable', true);

    liNode.className = 'txtSt';
    
    setIcn.className = 'material-icons';
    setIcn.appendChild(checkBxT);

    setBtn.className = 'iconBtn';
    
    delIcn.className = 'material-icons';
    delIcn.appendChild(delTxt);
    
    delBtn.className = 'deliconBtn';

    setBtn.appendChild(setIcn);
    delBtn.appendChild(delIcn);

    liItem.appendChild(setBtn);
    liItem.appendChild(liNode);
    liItem.appendChild(delBtn);
    
    ulListItem.appendChild(liItem);

    const setCheckBox = () => {
        setIcn.textContent = 'check_box';
    };

    const delItem = () => {
        liItem.remove();
        counterItems--;
        inputField.disabled = false;
        addBtn.disabled = true;
        error.style.display = 'none';
    };

    isMaxItemsInList();

    inputField.value = '';
    addBtn.disabled = true;

    setBtn.addEventListener('click', setCheckBox);
    delBtn.addEventListener('click', delItem);
}

const startDrag = event => {
    dragging = event.target;
}

const overDrag = event => {
    if (event.target.className === 'listBox-item') {
        event.preventDefault();

        const bounding = event.target.getBoundingClientRect();
        const offset = bounding.y + bounding.height / two;

        if (event.clientY - offset > zero) {
            event.target.style['border-top'] = '';
            event.target.style['border-bottom'] = '2px dashed #ccc';
        } else {
            event.target.style['border-top'] = '2px dashed #ccc';
            event.target.style['border-bottom'] = '';
        }
    }
}

const leaveDrag = event => {
    event.target.style['border-bottom'] = '';
    event.target.style['border-top'] = '';
}

const drop = event => {
    if (event.target.className === 'listBox-item') {
        event.preventDefault();

        if (event.target.style['border-bottom']) {
            event.target.style['border-bottom'] = '';
            ulListItem.insertBefore(dragging, event.target.nextSibling);
        } else {
            event.target.style['border-top'] = '';
            ulListItem.insertBefore(dragging, event.target);
        }
    }
}

inputField.addEventListener('keyup', checkKeyUp);

addBtn.addEventListener('click', checkOnClick);

ulListItem.addEventListener('dragstart', startDrag);
ulListItem.addEventListener('dragover', overDrag);
ulListItem.addEventListener('dragleave', leaveDrag);
ulListItem.addEventListener('drop', drop);

function addTask() {
    const inputElement = document.getElementById('inputtodo');
    const inputValue = inputElement.value.trim();

    if (inputValue !== '') {
        const listContainer = document.getElementById('list-container');
        const newItem = document.createElement('li');
        newItem.innerText = inputValue;

        const newButtonsDiv = document.createElement('div');
        newButtonsDiv.classList.add('buttons');

        const newCheckButton = document.createElement('button');
        newCheckButton.classList.add('check');
        newCheckButton.innerHTML = '<img src="../assets/check1.svg" alt="check">';
        newCheckButton.addEventListener('click', function () {
            checkTask(newItem);
        });

        const newTrashButton = document.createElement('button');
        newTrashButton.classList.add('trash');
        newTrashButton.innerHTML = '<img src="../assets/trash-21.svg" alt="trash">';
        newTrashButton.addEventListener('click', function () {
            deleteTask(newItem);
        });

        newButtonsDiv.appendChild(newCheckButton);
        newButtonsDiv.appendChild(newTrashButton);

        newItem.appendChild(newButtonsDiv);
        listContainer.appendChild(newItem);
        inputElement.value = '';
    }
}


function checkTask(item) {
    item.classList.toggle('completed');

    const checkButton = item.querySelector('.check');
    const checkImage = checkButton.querySelector('img');

    if (item.classList.contains('completed')) {
        checkImage.src = '../assets/x1.svg';
        checkImage.alt = 'checked';
        checkButton.style.backgroundColor = 'var(--neutral-250)'; 

        const taskItem = item.querySelector('.item');
        taskItem.style.textDecoration = 'line-through';
        taskItem.style.color = '#888';
    } else {
        checkImage.src = '../assets/check1.svg';
        checkImage.alt = 'check';
        checkButton.style.backgroundColor = ''; 
        const taskItem = item.querySelector('.item');
        taskItem.style.textDecoration = 'none';
        taskItem.style.color = '#000';
    }
}


function deleteTask(item) {
    item.remove();
}


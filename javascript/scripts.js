// Função para adicionar uma nova tarefa à lista
function addTask() {
    const inputElement = document.getElementById('inputtodo');
    const inputValue = inputElement.value.trim();

    if (inputValue !== '') {
        const listContainer = document.getElementById('list-container');
        const newItem = document.createElement('li');
        newItem.classList.add('item');
        newItem.innerText = inputValue;

        const newButtonsDiv = document.createElement('div');
        newButtonsDiv.classList.add('buttons');

        const newCheckButton = document.createElement('button');
        newCheckButton.classList.add('check');
        newCheckButton.innerHTML = '<img src="../assets/check1.svg" alt="check">';
        newCheckButton.addEventListener('click', function () {
            checkTask(this);
        });

        const newTrashButton = document.createElement('button');
        newTrashButton.classList.add('trash');
        newTrashButton.innerHTML = '<img src="../assets/trash-21.svg" alt="trash">';
        newTrashButton.addEventListener('click', function () {
            
        });

        newButtonsDiv.appendChild(newCheckButton);
        newButtonsDiv.appendChild(newTrashButton);

        newItem.appendChild(newButtonsDiv);
        listContainer.appendChild(newItem);

        inputElement.value = '';
    }
}

// Função para marcar uma tarefa como concluída
function checkTask(button) {
    const item = button.parentElement.parentElement;
    item.classList.toggle('completed');
}

// Função para excluir uma tarefa da lista
function deleteTask(button) {
    const item = button.parentElement.parentElement;
    item.remove();
}


const items_container = document.getElementById('items');
const item_template = document.getElementById('itemTemplate');
const add_button = document.getElementById('add');

let items = getItems();

function getItems() {
    const value = localStorage.getItem('todo-test') || "[]";

    return JSON.parse(value);

    // console.log(value);
};

function setItems(items) {
    const itemsJson = JSON.stringify(items);

    localStorage.setItem("todo-test", itemsJson)
};

function addItem() {
    items.unshift({
        description: "",
        completed: false
    });

    setItems(items);
    refreshList();
}


function refreshList() {
    items.sort((a,b) => {
        if (a.completed){
            return 1;
        } if ((b.completed))  {
            return -1;
        }
        return a.description < b.description ? -1 : 1;
    })
    // todo: sort Items

    items_container.innerHTML = "";

    for (const item of items) {
        const itemElement = item_template.content.cloneNode(true);
        const descriptionInput = itemElement.querySelector(".item-description");
        const completedInput = itemElement.querySelector(".item-completed");

        descriptionInput.value = item.description;
        completedInput.checked = item.completed;

        descriptionInput.addEventListener('change', () => {
            updateITem(item, 'description', descriptionInput.value)
        });
        completedInput.addEventListener('change', () => {
            updateITem(item, 'completed', completedInput.checked)
        });

        items_container.append(itemElement);
    }

};

add_button.addEventListener('click', () => {
    addItem();
});


function updateITem(item, key, value) {
item[key] = value;
setItems(items);
refreshList();
};

refreshList();
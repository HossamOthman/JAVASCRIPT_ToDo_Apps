const draggables = document.querySelectorAll('.draggable');
const containers = document.querySelectorAll('.container');

// event listener to box
draggables.forEach(elem => {
    elem.addEventListener('dragstart', () => {
        elem.classList.add('dragging')
    });
    elem.addEventListener('dragend', () => {
        elem.classList.remove('dragging')
    });
});

// event listener to container
containers.forEach(elem => {
    elem.addEventListener('dragover', e => {
        e.preventDefault();
        const afterElement = getDragAfterElement(elem, e.clientY);
        const draggable = document.querySelector('.dragging');
        // console.log(afterElement)
        if (afterElement == null) {
            elem.appendChild(draggable)
        } else {
            elem.insertBefore(draggable, afterElement)
        }
    });
});

// function to determine the order of elements
function getDragAfterElement(container, y) {
   const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')];

   return draggableElements.reduce((closest, child) => {
    const box = child.getBoundingClientRect();
    const offset = y - box.top - box.height / 2;
    // console.log(offset)
    if (offset < 0 && offset > closest.offset) {
        return {offset: offset, element:child}
    } else {
        return closest;
    }
   }, {offset: Number.NEGATIVE_INFINITY}).element
};
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

////////////////////////////////////////////////////////
// drag picture section

const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty')

// fill listeners
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);


// drag functions
function dragStart() {
    this.className += ' hold';
    setTimeout(() => this.className = 'invisible', 0 );
};

function dragEnd() {
    this.className = 'fill'
};


// now handling the empties... looping through the empties

// for (const empty of empties) {
//     empty.addEventListener('dragover', dragOver);
//     empty.addEventListener('dragenter', dragEnter);
//     empty.addEventListener('dragLeave', dragLeave);
//     empty.addEventListener('drop', dragDrop);
// }
empties.forEach(empty => {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
});

function dragOver(e) {
    e.preventDefault();
    
};

function dragEnter(e) {
    e.preventDefault();
   this.className += ' hovered';
};

function dragLeave() {
    this.className = 'empty'
};

function dragDrop() {
    this.className = 'empty';
    this.append(fill)
};

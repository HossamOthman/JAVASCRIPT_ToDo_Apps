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
        const draggable = document.querySelector('.dragging');
        elem.appendChild(draggable)
    });
})
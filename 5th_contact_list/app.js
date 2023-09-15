let filterInput = document.getElementById('filterinput');

filterInput.addEventListener('keyup', filterNames);


function filterNames() {
    // get value 
    let filterValue = filterInput.value.toUpperCase();

    // get names ul
    let ul = document.getElementById('names');
    // get li Items from ul
    let li = ul.querySelectorAll('li.collection-item');

    // loop through collection items li
    li.forEach(item => {
        let a = item.getElementsByTagName('a')[0];

        // if they match
        if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
}
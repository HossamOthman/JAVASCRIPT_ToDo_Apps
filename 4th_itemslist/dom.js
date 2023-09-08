// Examine the document object

// console.dir(document);

// console.log(document.images);


// get Element byID

// console.log(document.getElementById('header-title'));

// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');

// console.log(headerTitle.innerHTML);

// headerTitle.textContent = 'hello';
// headerTitle.innerText = 'hellbyeo';

// header.style.borderBottom = 'solid 3px #000';


// get Elements by class name
// var items = document.getElementsByClassName('list-group-item');

// console.log(items);
// items[1].style.fontWeight = 'bold';

// items[0].style.backgroundColor = 'yellow';

// // items.style.backgroundColor = '#777';

// for (var i = 0; i < items.length; i++) {
//     items[i].style.backgroundColor = '#fcfcfc';
// };

// get Elements by tyg name

// var items = document.getElementsByTagName('li');

// console.log(items);
// items[1].style.fontWeight = 'bold';

// items[0].style.backgroundColor = 'yellow';



// for (var i = 0; i < items.length; i++) {
//     items[i].style.backgroundColor = '#eee';
// };


// Query selector
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 10px #ccc';

// var input = document.querySelector('input');
// input.value = 'solid 10px #ccc';
// // input.style.backgroundColor = '#ddd';


// var submit = document.querySelector('input[type="submit"]');
// submit.value = 'send';


// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'orange';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';


// Query selector ALL
// var titles = document.querySelectorAll('.title');

// console.log(titles[0].textContent);

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');


// for(i of odd) {
//     i.style.backgroundColor = '#f4f4f4';
// }

// for(i of even) {
//     i.style.backgroundColor = '#ccc';
// }




// // traversing the DOM
// var itemList = document.querySelector('#items');

// parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#faf4e1'

// console.log(itemList.parentNode.parentNode);

// parentelement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#faf4e1'

// console.log(itemList.parentElement);

//Child Nodes
// console.log(itemList.children);

// itemList.childNodes.style.backgroundColor = '#333';
// var li = itemList.children;

// for(i of li ) {
//     i.style.backgroundColor = '#333';
// }

// li[1].style.backgroundColor = '#595';

// // first child
// // console.log(itemList.firstChild)


// // firstelement  child
// console.log(itemList.lastElementChild);

// itemList.lastElementChild.textContent = 'yellow'

// next sibling
// console.log(itemList.previousElementSibling)

// itemList.previousElementSibling.style.backgroundColor = 'orange';

// create Element create Element
// var newDiv = document.createElement('div');

// console.log(newDiv);

// // add class
// newDiv.className = 'items';

// // add id
// newDiv.id = 'nuId';

// // add attribute
// newDiv.setAttribute('title', 'Hello Div');

// //create a text Node
// var newDivText = document.createTextNode('hello World');
// // add text to div
// newDiv.appendChild(newDivText);

// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1')
// newDiv.style.fontSize = '27px'

// container.insertBefore(newDiv, h1)
// newDiv.style.height = '50px'
// newDiv.style.width = '50px'
// newDiv.style.border = 'solid 2px #000'

// var box = document.getElementById('button').addEventListener('click', runEvent );
// var box = document.getElementById('output');


// button.addEventListener('mousemove', runEvent );

// function buttonClick(e) {
//     // document.getElementById('header-title').textContent = 'Changed';
//     // document.querySelector('#main-header').style.backgroundColor = '#333';
//     // console.log(e.target.style);
//     // var output = document.getElementById('output');
//     // output.innerHTML = '<h3>text added</h3>';
//     // console.log(e.offsetX, e.offsetY);
//     console.log(e.altKey);
// }

// var itemInput = document.querySelector('input[type="text"]');
// var form = document.querySelector('form');
// var select = document.querySelector('select');

// itemInput.addEventListener('type', runEvent);
// select.addEventListener('change', runEvent);
// form.addEventListener('submit', runEvent);

// function runEvent(e) {
//     e.preventDefault();
//     document.getElementById('output').innerText = e.target.value
//     // box.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 0 )`
//     console.log('Event Type: ' + e.type);
//     console.log(e)
// }

var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

// Form submit event
form.addEventListener('submit', addItem);
// delete Event
itemList.addEventListener('click', removeItem);

// function to add an Item
function addItem(e) {
    e.preventDefault();

// get Input Value
var newItem = document.getElementById('newItem').value;

// create new li element
var li = document.createElement('li');
// add a class name to the li
li.className = 'list-group-item';

// add text node with input value
li.appendChild(document.createTextNode(newItem));

// create delete bottun
var deleteBtn = document.createElement('button');
deleteBtn.appendChild(document.createTextNode('X')); //deleteBtn.innerText = 'X'; 
// add class to bottun
deleteBtn.className = 'btn_x';
// append it to li element
li.appendChild(deleteBtn);

// appending li to ul
itemList.appendChild(li);
}


// function to remove an Item
function removeItem(e) {
    if (e.target.classList.contains('btn_x')) {
        if(confirm('are you sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}
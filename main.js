const form = document.querySelector('#addForm');
const itemList = document.querySelector('#items');
const filter = document.getElementById("filter");

//form submit event
form.addEventListener("submit",addItem);
//delete event
itemList.addEventListener("click",removeItem);
//filter event
filter.addEventListener("keyup",filterItems);

function addItem(e){
    e.preventDefault();
    let newItem = document.getElementById('item').value;
    let li = document.createElement('li');
    li.classList.add('list-group-item');
    li.textContent = newItem;

    let deleteBtn = document.createElement("button");
    deleteBtn.className='btn btn-danger btn-sm float-right delete';
    deleteBtn.textContent = "X";
    li.appendChild(deleteBtn);

    itemList.appendChild(li);
}

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm("Are you sure?")){
            let li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

function filterItems(e){
    let text = e.target.value.toLowerCase();
    const items = itemList.getElementsByTagName('li');
    Array.from(items).forEach(function(item){
        let itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text)!=-1){
            item.style.display = "block";
        }else{
            item.style.display = "none";
        }
    });
}



const itemInput = document.getElementById('item-input');
const addBtn = document.getElementById('addbutton');
const clearBtn = document.getElementById('clearbutton');
const shoppingList = document.getElementById('shoppinglist');

addBtn.addEventLister('click',()  => {
    const itemText =itemInput.value.trim();
    if (itemText){
        
        shoppingList.innerHTML=`<span>${itemText}</span>
        <input type= 'checkbox' class='item-checkbox'>`;
        itemInput.value=''
    }
})
markPurchasedButton.addEventLister('click',()=>{
    const checkedItem =document.querySelector('.item-checkbox:checked');
    checkedItem.forEach(checkbox=>{
        const listItem=checkbox('li')
        listItem.classList.toggle('purchased')
    })
})
clearBtn.addEventLister('click',()=>{
    shoppingList.innerHTML=''
})
itemInput.addEventListener('keypress',(e)=>{
    if (e.key =='Enter'){
        addBtn.click()
    }
})
function saveToLocalStorage() {
    const items = [...shoppingList.children].map((li) => ({
        text: li.querySelector('span').textContent,
        purchased: li.classList.contains('purchased'),
    }));
    localStorage.setItem('shoppingList', JSON.stringify(items));
}


function loadFromLocalStorage() {
    const items = JSON.parse(localStorage.getItem('shoppingList')) || [];
    items.forEach((item) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${item.text}</span>
            <button class="delete-btn">Delete</button>
            <input type="checkbox" class="item-checkbox" ${
                item.purchased ? 'checked' : ''
            }> Purchased`;
        if (item.purchased) li.classList.add('purchased');
        shoppingList.appendChild(li);
    });
}
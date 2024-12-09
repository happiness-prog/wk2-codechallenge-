
const itemInput = document.getElementById('item-input');
const addBtn = document.getElementById('addbutton');
const clearBtn = document.getElementById('clearbutton');
const shoppingList = document.getElementById('shoppinglist');

addbutton.addEventLister('click,'()  => {
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
clearListButton.addEventLister('click',()=>{
    shoppingList.innerHTML=''
})
itemInput.addEventListener('keypress',(e)=>{
    if (e.key =='Enter'){
        addButton.click()
    }
})
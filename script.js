let addBtn = document.querySelector(".addBtn");
let getData = document.querySelector(".listItemInputData");
let getUL= document.querySelector(".outputUL");


addBtn.addEventListener('click', function (e){
    let createLi = document.createElement('li');
    createLi.innerText = getData.value;
    getUL.appendChild(createLi);
    getData.value = "";
    
    Array.from(getUL.children).reverse().forEach(element =>getUL.appendChild(element));
})



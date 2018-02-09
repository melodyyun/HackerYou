const pList = document.querySelectorAll('p');

pList.forEach((p)=>{
    // console.log(p);
    p.innerHTML = "Hello";
    p.style.color = "blue";
    console.log(pList);
    console.log(p.style);

});

pList[0].innerText = "Changed again!";
let add = "";
const liList = document.querySelectorAll("li");
const newNumb = document.getElementById("new");
for (let i of liList){
    i.addEventListener('click',()=>{
        add+=i.innerText;
        newNumb.innerHTML=add;
    })
}
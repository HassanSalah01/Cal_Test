let add = "";
const liList = document.querySelectorAll("li");
const newNumb = document.getElementById("new");
const oldNumb = document.getElementById("old");
let locStor = "";
for (let i of liList){
    i.style.cursor = "default"
    // console.log(i.innerHTML,!isNaN(parseInt(i.innerHTML)));
    if(i.innerHTML,!isNaN(parseInt(i.innerHTML))){
        i.addEventListener("click",()=>{
            console.log(i.innerHTML);
            locStor = i.innerHTML;
            add+=i.innerHTML;
            newNumb.innerHTML = add;
            console.log(locStor);
        })
    }else{
        i.addEventListener("click",()=>{
            locStor=i.innerHTML;
            console.log(locStor);
        })
    }
}

// if(add.length > 0 && )
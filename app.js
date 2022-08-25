let tops = "";
let bottom = "";
const liList = document.querySelectorAll("li");
const newNumb = document.getElementById("new");
const oldNumb = document.getElementById("old");
let locStor = "";
let sign = false;

const rightSign=(x)=>{
    return (x=="x"|| x=="/"|| x=="+"|| x=="-")
}

for (let i of liList){
    i.style.cursor = "default"
    // console.log(i.innerHTML,!isNaN(parseInt(i.innerHTML)));
    if(i.innerHTML,!isNaN(parseInt(i.innerHTML))){
        i.addEventListener("click",()=>{
            console.log(i.innerHTML);
            locStor = i.innerHTML;
            bottom+=i.innerHTML;
            newNumb.innerHTML = bottom;
            console.log(locStor);
            sign = false;
        })
    }else if (rightSign(i.innerHTML)){
        i.addEventListener("click",()=>{
            console.log(i.innerHTML);
            // locStor=i.innerHTML;
            // console.log(locStor);
            // sign = true;
            // newNumb.innerHTML = "";
            // oldNumb.innerHTML = bottom;
            // bottom = "";
            // if(rightsign){
            //     calculate(parseFloat(num),sign)
            // }
            // calculate(parseFloat(num),sign)
        // add = 0 ;
        // })
    })
    }
}
// setInterval(()=>{
//     if(sign){
//         newNumb.innerHTML = 0;
//         oldNumb.innerHTML = add;
//         add = 0 ;
//     }
// },1000)

// if(add.length > 0 && )

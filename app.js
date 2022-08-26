let tops = "";
let bottom = "";
let op1 = 0 ;
let op2 = 0 ;
let solution = 0;
const stk = new Stack();
const liList = document.querySelectorAll("li");
const newNumb = document.getElementById("new");
const oldNumb = document.getElementById("old");
let locStor = "";
// let sign = false;

const rightSign=(x)=>{
    return (x=="x"|| x=="/"|| x=="+"|| x=="-")
}
const calc = (operation , operand1,operand2 )=>{
    // solution = 0 ;
    const answer = 0;
    console.log(operation,operand1,operand2)
    switch(operation) {
        case "+":
            answer = parseFloat(operand1)+parseFloat(operand2);

            break;
        case "-":
            answer = parseFloat(operand1)-parseFloat(operand2);
            break;
        case "/":
            answer = parseFloat(operand1)/parseFloat(operand2);
            break;
        case "x":
            answer = parseFloat(operand1)*parseFloat(operand2);
            break;
        default:
            
        }
        return answer;
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
        console.log("this",stk.stack)
        i.addEventListener("click",()=>{
            console.log("this is the size",stk.size())
            // if(stk.size()==2){
                // let numb2 = stk.getTop();
                // stk.pop();
                // let operation = stk.getTop();
                // stk.pop();
                // let numb1 = stk.getTop();
                // stk.pop();
                // console.log(numb1,operation,numb2,"tttttttttttttttt")
                // stk.pop;
                // stk.push(calc(operation , numb1 , numb2));
                // stk.push(i.innerHTML);
                // console.log(stk.stks())
            // }else{
                stk.push(parseFloat(bottom));
                stk.push(i.innerHTML);
                stk.stks();
                console.log(stk.stks())
            }
            // console.log(i.innerHTML);
            // oldNumb.innerHTML = `${bottom} ${i.innerHTML}`;
            // bottom.innerHTML = bottom;
            // op1 = parseFloat(bottom)
            // console.log(op1)
            // calc(i.innerHTML,op1);
            bottom = '';
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
    }else if(i.innerHTML=="="){
        i.addEventListener("click",()=>{
            console.log(solution)
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

const main=()=>{
}

main();

let tops = "";
let bottom = "";
let op1 = 0 ;
let op2 = 0 ;
let solution = 0;
let sss = true;
let arrOp = []
const liList = document.querySelectorAll("li");
const newNumb = document.getElementById("new");
const oldNumb = document.getElementById("old");
let locStor = "";
// let sign = false;

const rightSign=(x)=>{
    return (x=="x"|| x=="/"|| x=="+"|| x=="-")
}
const calc = (operand1,operation,operand2)=>{
    // solution = 0 ;
    let answer = 0;
    console.log(operand1,operation,operand2)
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
    if(i.innerHTML,!isNaN(parseInt(i.innerHTML))){
        i.addEventListener("click",()=>{
            bottom+=i.innerHTML;
            newNumb.innerHTML = bottom;
        })
    }else if (rightSign(i.innerHTML)){
        i.addEventListener("click",()=>{
            arrOp.push(bottom);
            if(arrOp.length==3){
                let solution = calc(arrOp[0],arrOp[1],arrOp[2]);
                console.log(arrOp)
                console.log(solution)
                arrOp=[solution];
                console.log(arrOp)
                arrOp.push(i.innerHTML)
                oldNumb.innerHTML = `${solution} ${i.innerHTML}`
            }else{
                console.log(arrOp)
                // arrOp.push(i.innerHTML);
                if(sss){
                    sss= false;
                    oldNumb.innerHTML = `${bottom} ${i.innerHTML}`;
                }else{
                    oldNumb.innerHTML = `${solution} ${i.innerHTML}`
                }
                arrOp.push(i.innerHTML)
            }
            bottom = '';
        })
    }
}

setInterval(()=>{
    console.log(arrOp)
},1000)
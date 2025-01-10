var operator= "";
var FirstNumber="";
var SecondNumber="";

function append(number){
    if(operator===""){
        FirstNumber+=number;
        document.getElementById('result').value=FirstNumber;
    }
    else{
        SecondNumber+=number;
        document.getElementById('result').value=FirstNumber+""+operator+""+SecondNumber;
    }
}

function showresult(){
    let res = 0;
    switch(operator){
        case '+':
        res = parseInt(FirstNumber) + parseInt(SecondNumber);
        break;

        case '-':
        res = parseInt(FirstNumber) - parseInt(SecondNumber);
        break;

        case '*':
        res = parseInt(FirstNumber) * parseInt(SecondNumber);
        break;

        case '/':
        res = parseInt(FirstNumber) / parseInt(SecondNumber);
        break;
    }
    document.getElementById('result').value =res;
}

function setoperator(op){
    operator=op;
    document.getElementById('result').value=FirstNumber+""+operator;
}

function reset(){
    FirstNumber=""
    SecondNumber=""
    operator =""
    document.getElementById('result').value="";
}

const fieldset = document.querySelector('fieldset');
const button= document.querySelectorAll('button');

const color = ['red','blue','pink','yellow','green','violet','grey'];

fieldset.style.backgroundColor = 'orange';

button.forEach(button => button.addEventListener('mouseover',function(){
    const colorIndex = parseInt(Math.random()*color.length);
    fieldset.style.backgroundColor=color[colorIndex];
}));


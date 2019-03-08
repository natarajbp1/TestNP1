//console.log('JavaScript is Rad');
const theButton = document.getElementById('click-me');
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const answer = document.getElementById('answer');
answer.innerText = defaultMessage;
theButton.addEventListener('click', function () {
    const number1 = num1.valueAsNumber;
    const number2 = num2.valueAsNumber;
    //console.log('You clicked it');
    //console.log(number1, number2);
    console.log({ number1, number2 });
    answer.innerText = add(number1, number2);

});
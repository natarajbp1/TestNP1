import './styles.css';

const tips = document.querySelectorAll('button');

tips.forEach(s => s.addEventListener('click', handleClick));

function handleClick() {
    const billInput = parseFloat((<HTMLInputElement>document.getElementById("billInput")).value);
    const tipPercent = document.querySelector('#tipPercent');
    const billAmount = document.querySelector('#billAmount');
    const billTipPercent = document.querySelector('#billTipPercent');
    const billAmountTip = document.querySelector('#billAmountTip');
    const billAmountTotal = document.querySelector('#billAmountTotal');
    const b = this as HTMLButtonElement;
    tipPercent.innerHTML = b.value;
    billAmount.innerHTML = billInput.toString();
    billTipPercent.innerHTML = b.value;
    const tipAmount: number = (parseFloat(b.value) / 100) * (billInput);
    billAmountTip.innerHTML = tipAmount.toFixed(2).toString();
    billAmountTotal.innerHTML = (tipAmount + billInput).toFixed(2).toString();
    console.log(billInput);
    console.log(b.value);
}


//Test
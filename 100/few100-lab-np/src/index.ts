import './styles.css';

const tips = document.querySelectorAll('button');

tips.forEach(s => s.addEventListener('click', handleClick));

function handleClick() {
    const billInput = parseFloat((<HTMLInputElement>document.getElementById("billInput")).value);
    const b = this as HTMLButtonElement;
    if (billInput) {
        document.querySelector('#tipPercent').innerHTML = b.value;
        document.querySelector('#billAmount').innerHTML = billInput.toString();
        document.querySelector('#billTipPercent').innerHTML = b.value;
        const tipAmount: number = (parseFloat(b.value) / 100) * (billInput);
        document.querySelector('#billAmountTip').innerHTML = tipAmount.toFixed(2).toString();
        document.querySelector('#billAmountTotal').innerHTML = (tipAmount + billInput).toFixed(2).toString();
    }
}


//Test
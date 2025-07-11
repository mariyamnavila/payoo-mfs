document.getElementById('btn-add-money')
    .addEventListener('click', function(event){
        event.preventDefault();
        // get money and the pin number
        const addMoney = document.getElementById('input-add-money').value;
        const addMoneyNumber = parseFloat(addMoney);
        const pinNumber = document.getElementById('input-pin-number').value;
        if (pinNumber === '1234') {
            // add money to the account
            const balance = document.getElementById('account-balance').innerText;
            const balanceNumber = parseFloat(balance);
            // new balance
            const newBalance = addMoneyNumber + balanceNumber;
            // update the DOM with updated balance
            document.getElementById('account-balance').innerText = newBalance;
        } else {
            alert('Failed to add money! Please try again later.')
        }
    })
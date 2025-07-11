// add money to the account

// step-1 add a event handler to the add money button inside the form

document.getElementById('btn-add-money')
    .addEventListener('click', function(event){
        event.preventDefault();
        // step 2 get money to be added d to the account
        const addMoneyInput = document.getElementById('input-add-money').value;
        console.log(addMoneyInput)
        // get pin number provided
        const pinNumberInput = document.getElementById('input-pin-number').value;
        console.log(pinNumberInput)
    })
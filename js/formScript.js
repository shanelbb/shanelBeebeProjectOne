// Form handling 
const alert = document.getElementById('alert');
const alertContent = document.getElementById('alertContent');
const submit = document.getElementById('btn');
const userName = document.getElementById('userName');
const userEmail = document.getElementById('userEmail');
const userComment = document.getElementById('userComment');

// opens alert box
openAlert = () => {
    alert.classList.add('open');
    window.addEventListener('keyup',closeOnKeyup);
}

// closes alert box
closeAlert = () => {
    alert.classList.remove('open')
}

// allows user to click outside alert box to close
handleClickToClose = (e) => {
    if (e.target === e.currentTarget) {
        closeAlert()
    }
}

// allows user to close alert box with Enter key
closeOnKeyup = (e) => {
    if (e.key === 'Enter') {
        closeAlert();
    }
}

// attaches close function to dynamically generated alert button
document.addEventListener('click', (e) => {
    if (e.target && e.target.id === 'alertBtn') {
        closeAlert();
    }
})

formAlert = () => {
    // Attaches event lister to submit button
    submit.addEventListener('click', (e) => {
        e.preventDefault();
        // Triggers error message if required fields aren't filled out
        if (!userName.value || !userEmail.value || !userComment.value) {
            
            alertContent.innerHTML = (
                `<h3>Oops!</h3>
                <p>Please fill out all required fields</p>
                <button class="alertBtn" id="alertBtn">OK</button>
                `
            )
            openAlert();
        } else {
            //  Success message when form is submitted
            alertContent.innerHTML = (
                `
                <h3>Thank You!</h3>
                <p>Submitted Successfully</p>
                <button class"alertBtn" id="alertBtn">OK</button>
                `
            )
            openAlert();
            document.getElementById('userForm').reset();
        }
    })
}

formAlert();
alert.addEventListener('click', handleClickToClose)
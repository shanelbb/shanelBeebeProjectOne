// FEATURE #1
// Custom alerts on form submission

formAlert = () => {
    // Attaches event lister to submit button
    submit.addEventListener('click', (e) => {
        e.preventDefault();
        // Triggers error message if required fields aren't filled out
        if (!userName.value || !userEmail.value || !userComment.value) {
            
            alertContent.innerHTML = (
                `<h3>Oops!</h3>
                <p>Please fill out all required fields</p>
                <button class="errorBtn" id="alertBtn">OK</button>
                `
            )
            openAlert();
        } else {
            //  Success message when form is submitted
            alertContent.innerHTML = (
                `
                <h3>Thank You!</h3>
                <p>Your message has been submitted.</p>
                <button class="successBtn" id="alertBtn">OK</button>
                `
            )
            openAlert();

            document.getElementById('userForm').reset();
        }
    })
}

formAlert();
alert.addEventListener('click', handleClickToClose)
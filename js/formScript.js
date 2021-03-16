// Form error handling 

const submit = document.getElementById('btn');
const userName = document.getElementById('userName');
const userEmail = document.getElementById('userEmail');
const userComment = document.getElementById('userComment');

// Attaches event lister to submit button
submit.addEventListener('click', (e) => {
    // prevent page reload
    e.preventDefault();
    
    // Triggers error message if required fields aren't fille out
    if (!userName.value || !userEmail.value || !userComment.value) {
        Swal.fire({
            title: 'Oops!',
            text: 'Please fill out all required fields',
            iconColor: '#C3DAB7',
            background: '#f6f6f6',
            confirmButtonColor: '#C3DAB7',
        })
    } else {
        //  Success message when form is submitted
        Swal.fire({
            text: "Submitted Succesfully",
            icon: 'success',
            iconColor: '#C3DAB7',
            background: '#f6f6f6',
            confirmButtonColor: '#C3DAB7',
        }    
    )
        document.getElementById('userForm').reset();
    }
        
})

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
    window.addEventListener('keyup', closeOnKeyup);
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
    if (e.key === 'Enter' || e.key === 'Escape') {
        closeAlert();
    }
}

// attaches close function to dynamically generated ok button
document.addEventListener('click', (e) => {
    if (e.target && e.target.id === 'alertBtn') {
        closeAlert();
    }
})
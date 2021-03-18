// Adds open class to modal so that it appears on the page
openModal = () => {
    modal.classList.add('open');
    window.addEventListener('keyup', handleKeyup)
}

// Removing open class from modal to remove from page
closeModal = () => {
    modal.classList.remove('open')
}


// Allows user to click outside image to close the modal
handleClickToClose = (e) => {
    if (e.target === e.currentTarget) {
        closeModal();
    }
}

// Closes modal content on click of the close button
document.addEventListener('click', (e) => {
    if (e.target && e.target.id === 'close') {
        closeModal();
    }
})

// Allows user to hit escape to close the modal
handleKeyup = (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
}
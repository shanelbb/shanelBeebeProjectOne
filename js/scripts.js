
// Home page carousel section 

const img = document.getElementById("carouselImg");
const right = document.getElementById('slideRight');
const left = document.getElementById('slideLeft');


const images = [
    "./assets/home-3.jpeg",
    "./assets/carousel-1.jpg",
    "./assets/carousel-2.jpg",
    "./assets/carousel-3.jpg"
]

// Sets initial image
img.src = images[0];

let slide = 0;

// Slides carousel images to the right
slideRight = () => {
    if(slide >= images.length - 1) {
    slide = 0;
    img.src = images[slide];
    return
}
    img.src = images[slide + 1];
    slide++;
}

// Slides carousel images to the left
slideLeft = () => {
    if(slide < 1) {
    slide = images.length - 1;
    img.src = images[slide];
    return
}
    img.src = images[slide - 1];
    slide--;
}

// Event Listeners
right.addEventListener('click', slideRight);
left.addEventListener('click', slideLeft);



// Team Members section modal

const modal = document.getElementById('modal');
const modalContent = document.getElementById('modalContent');
const galleryImg = document.querySelectorAll('.galleryImg');

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


// opens modal when user clicks on an image in the gallery
modalImage = () => {
    galleryImg.forEach(item => {
        item.addEventListener('click', (e) => {
            modalContent.innerHTML = (
                `<figure><img src="${e.currentTarget.src}" alt="${e.target.alt}"/>
                <span class="close"><img id="close" src="./assets/close.png" alt="x in a circle icon"/></span></figure>`
                )
                openModal();
            })
        })
    }
    
modalImage();
modal.addEventListener('click', handleClickToClose);


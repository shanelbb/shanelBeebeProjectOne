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
    } else { 
        img.src = images[slide + 1];
        slide++;
    }
}

// Slides carousel images to the left
slideLeft = () => {
    if (slide < 1) {
    slide = images.length - 1;
    img.src = images[slide];
    } else {
        img.src = images[slide - 1];
        slide--;
    }
}

// Carousel slider event Listeners
right.addEventListener('click', slideRight);
left.addEventListener('click', slideLeft);



// Team Members section modal

const modal = document.getElementById('modal');
const modalContent = document.getElementById('modalContent');
const galleryImg = document.querySelectorAll('.galleryImg');

// opens modal when user clicks on an image in the gallery
modalImage = () => {
    galleryImg.forEach(item => {
        item.addEventListener('click', (e) => {
            modalContent.innerHTML = (
                `<figure>
                <img src="${e.currentTarget.src}" alt="${e.target.alt}" class='modalImg'/>
                <span class="close"><img id="close" src="./assets/close.png" alt="x in a circle icon"/></span>
                <figcaption>${e.target.dataset.empname} - ${e.target.dataset.emptitle}</figcaption>
                </figure>`
                )
                openModal();
            })
    })
}
 
modalImage();
modal.addEventListener('click', handleClickToClose);


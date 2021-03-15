// Related Posts section modal

const modal = document.getElementById('blogModal');
const modalContent = document.getElementById('blogModalContent');
const blogImg = document.querySelectorAll('.blogImg');

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
    blogImg.forEach(item => {
        item.addEventListener('click', (e) => {
            modalContent.innerHTML = (
                `<figure><img src="${e.currentTarget.src}" alt="${e.target.alt}"/>
                <span class="close"><img id="close" src="./assets/close.png" alt="x in a circle icon"/></span></figure>
                <div>
                <h3>Podcasting Operational Change</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor doloribus iusto esse? Voluptatibus esse recusandae dolores consectetur? Dolore ut alias, veritatis odit obcaecati sapiente suscipit pariatur quo. Exercitationem architecto magnam aliquid? Ad dolores corrupti unde animi! Ipsam accusantium nobis minima natus ex fuga explicabo dolore quae deleniti excepturi sunt voluptas, voluptatem optio deserunt placeat, esse fugiat dolor consequuntur repudiandae iure libero quia similique, ipsa neque? Ratione consequuntur explicabo repellat illo natus, minus illum harum dolor id in reprehenderit doloribus vel esse! Aliquid nemo temporibus quo libero vitae enim reiciendis, placeat sequi nostrum veritatis, dicta aliquam doloremque expedita sunt rem aut!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus inventore corrupti nesciunt. Magnam iusto inventore molestias expedita qui, rerum nesciunt eligendi hic ullam harum suscipit, unde libero numquam nemo soluta cupiditate id fugiat dolore provident nam nulla distinctio tempore aliquam! Et quisquam inventore enim doloribus accusamus eveniet, odit cumque omnis, nobis illo, eligendi nihil! Deserunt praesentium nobis temporibus molestiae cumque, quos eum optio sunt doloremque reiciendis quas voluptate ipsam vel. Molestias soluta natus suscipit ipsum.</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, non magni consequuntur quod molestiae facere. Quae temporibus quia tempora ullam quo aliquam earum aspernatur officiis neque dicta esse harum magni quasi aut dolore voluptas, unde magnam reiciendis repellendus nulla ut, adipisci debitis. In nostrum molestias laudantium fugiat. Hic, consectetur? Et tenetur veniam repudiandae, nemo, veritatis a voluptates sequi ullam deserunt at assumenda magni quo minus rerum doloribus aspernatur alias dolorum. Cumque quasi est, nam doloribus quae iure similique, ipsum rem repudiandae aperiam nostrum ad debitis? Nesciunt nisi ipsa architecto eaque error. Repudiandae, est quam? Itaque, suscipit ipsum. Qui, cumque consequatur!</p>
                </div>
                `
                )
                openModal();
            })
        })
    }
    
modalImage();
modal.addEventListener('click', handleClickToClose);
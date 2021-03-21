// FEATURE #1
// RELATED POSTS SECTION BLOG MODAL
const modal = document.getElementById('blogModal');
const modalContent = document.getElementById('blogModalContent');
const blogImg = document.querySelectorAll('.blogImg');

// Stores the content of Blog Post Modal
const modalHTML = (e) => {
  modalContent.innerHTML = (
                `<figure><img src="${e.currentTarget.src}" alt="${e.target.alt}"/>
                <span class="close"><img id="close" src="./assets/close.png" alt="x in a circle icon"/></span></figure>
                <div class="blogModalText">
                <h3>Podcasting Operational Change</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor doloribus iusto esse? Voluptatibus esse recusandae dolores consectetur? Dolore ut alias, veritatis odit obcaecati sapiente suscipit pariatur quo. Exercitationem architecto magnam aliquid? Ad dolores corrupti unde animi! Ipsam accusantium nobis minima natus ex fuga explicabo dolore quae deleniti excepturi sunt voluptas, voluptatem optio deserunt placeat, esse fugiat dolor consequuntur repudiandae iure libero quia similique, ipsa neque? Ratione consequuntur explicabo repellat illo natus, minus illum harum dolor id in reprehenderit doloribus vel esse! Aliquid nemo temporibus quo libero vitae enim reiciendis, placeat sequi nostrum veritatis, dicta aliquam doloremque expedita sunt rem aut!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus inventore corrupti nesciunt. Magnam iusto inventore molestias expedita qui, rerum nesciunt eligendi hic ullam harum suscipit, unde libero numquam nemo soluta cupiditate id fugiat dolore provident nam nulla distinctio tempore aliquam! Et quisquam inventore enim doloribus accusamus eveniet, odit cumque omnis, nobis illo, eligendi nihil! Deserunt praesentium nobis temporibus molestiae cumque, quos eum optio sunt doloremque reiciendis quas voluptate ipsam vel. Molestias soluta natus suscipit ipsum.</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, non magni consequuntur quod molestiae facere. Quae temporibus quia tempora ullam quo aliquam earum aspernatur officiis neque dicta esse harum magni quasi aut dolore voluptas, unde magnam reiciendis repellendus nulla ut, adipisci debitis. In nostrum molestias laudantium fugiat. Hic, consectetur? Et tenetur veniam repudiandae, nemo, veritatis a voluptates sequi ullam deserunt at assumenda magni quo minus rerum doloribus aspernatur alias dolorum. Cumque quasi est, nam doloribus quae iure similique, ipsum rem repudiandae aperiam nostrum ad debitis? Nesciunt nisi ipsa architecto eaque error. Repudiandae, est quam? Itaque, suscipit ipsum. Qui, cumque consequatur!</p>
                </div>
                `
                )
                openModal();
}

// opens modal when user clicks on an image in the gallery
const modalBlogPost = () => {
    blogImg.forEach(item => {
        item.addEventListener('click', (e) => {
            modalHTML(e);
            })
        })
    }

// Opens modal when enter is clicked on focused image
const modalBlogOnKeyup = () => {
    blogImg.forEach(item => {
        item.addEventListener('keyup', (e) => {
            if (e.key === 'Enter') {
                modalHTML(e);
            }
        })
    })
}


modalBlogPost();
modalBlogOnKeyup();
modal.addEventListener('click', handleClickToClose);


// FEATURE #2
// ALERT FOR FORM SUBMISSIONS

const contentFunc = () => {
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
                <p>Your comment will be added.</p>
                <button class="successBtn" id="alertBtn">OK</button>
                `
                )
                openAlert();
        }
}
        
const commentFormAlert = () => {
     // Attaches event lister to submit button
        submit.addEventListener('click', (e) => {
            e.preventDefault();
            contentFunc();
        })
}

// Allows comment to be submitted when enter is pressed 
const formAlertOnKeyup = (e) => {
    if (e.key === 'Enter') {
        e.preventDefault()
        contentFunc()
    }
}


commentFormAlert();
alert.addEventListener('click', alertClickToClose)
submit.addEventListener('keyup', formAlertOnKeyup)
        

// FEATURE #3
// ADDING/DELETING COMMENTS TO PAGE AND LS

// Section selector
const commentSection = document.querySelector('.postComments');
// adds div to comment section for new comments to live in
const newComments = document.createElement('div');
newComments.classList.add('newCommentsContainer');
commentSection.appendChild(newComments)


// Creates date to add to comment
const currentDate = new Date();
const newDate = currentDate.toUTCString()

// Function to add values to a comment object
const assignCommentObj = () => {
    const newComment = {
        name: '',
        comment: '',
        date: '',
        id: ''
    }
    newComment.name = userName.value;
    newComment.comment = userComment.value;
    newComment.date = newDate;
    newComment.id = Date.now();
    return newComment
}


// Creates the click event that saves comments in LS and adds comments to page
document.addEventListener('click', (e) => {
    if (e.target && e.target.className === 'successBtn') {          
        // variable to store newly added comment
        const addedComment = assignCommentObj()

        // retrieves stored comments from LS
        const storedData = getCommentLS();

        // Checks if there are stored comments in LS
        if (storedData) {
            // If there are stored comments, adds new comment to them
            addToStoredCommentsArray(storedData, addedComment)
        } else {
            // if no stored comments, saves new comment in LS
            addCommentLS(addedComment)
        }
        
        // Clears the new comments div
        newComments.innerHTML = '';

        // get all comment data from local storage
        const comments = getCommentLS();

        // adds comments to the page
        getComments(comments);
    }
})

// Function to remove comments from page
const removeAComment = (e) => {
    if (e.target.className === 'remove') {
        //variable to store existing comment data
        const commentData = getCommentLS();

        // loops through comment data
        commentData.forEach(el => {
            // if id of comment data element matches id of target the
            // comment will be removed and the page updated
            if (el.id.toString() === e.target.id) {
                removeCommentLS(el.id)
                const updatedCommentData = getCommentLS();
                newComments.innerHTML = '';
                getComments(updatedCommentData)
            }
            
        })
    }
}

// Creates the click event that calls the removeAComment function
newComments.addEventListener('click', removeAComment)

// Allows a comment to be deleted when Enter key is pressed
newComments.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        removeAComment(e);
    }
})

// Function to add comment data to local storage
// (I know you wouldn't really use LS to store page comments but I wanted 
// to persist them somehow just for this practice project)
const addCommentLS = (comment) => {
    localStorage.setItem('commentsData', JSON.stringify(comment));  
}

// Function to add new comment to existing comments
const addToStoredCommentsArray = (data, value) => {
    data.push(value);
    localStorage.setItem('commentsData', JSON.stringify(data));
}

// Function to delete comment when remove comment span is clicked
const removeCommentLS = (commentId) => {
    const commentIds = getCommentLS();
    localStorage.setItem('commentsData', JSON.stringify(commentIds.filter(id => id.id !== commentId)))
}

// Function to retrieve comment data from local storage
const getCommentLS = () => {
    const localData = localStorage.getItem('commentsData');
    return localData ? JSON.parse(localData) : [];
}

// Function to add comments to the page
const getComments = (saved) => {

    // Loops through comment data and creates a comment element for each
    for (let i = 0; i < saved.length; i++){
        // create div for comments to live in
        const commentDiv = document.createElement('div');
        commentDiv.classList.add('comment');
        newComments.appendChild(commentDiv);
                
        // Add an image to comment
        const commentImg = document.createElement('img');
        commentImg.src = "./assets/anon-user.png"
        commentDiv.appendChild(commentImg)
    
        // add comment bubble
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');
        commentDiv.appendChild(bubble)
                
        // add h4 
        const h4 = document.createElement('h4');
        bubble.appendChild(h4);
        h4.innerText = saved[i].name;
                
        //add p with comment 
        const commentP = document.createElement('p');
        bubble.appendChild(commentP);
        commentP.innerText = saved[i].comment;
                
        //add p with date 
        const dateP = document.createElement('p');
        dateP.classList.add('commentDate')
        bubble.appendChild(dateP);
        dateP.innerText = saved[i].date;

        // adds remove comment option to comment element
        const removeComment = document.createElement('span');
        removeComment.classList.add('remove');
        // Makes span tabbable so it can be used with enter key
        removeComment.setAttribute('tabindex', '0')
        // adds id to span to compare with when deleting comment
        removeComment.setAttribute('id', saved[i].id);
        bubble.appendChild(removeComment);
        removeComment.innerText = 'Remove Comment'
    }

    document.getElementById('userForm').reset();
}

// Prints comments saved in local storage to page on page load
window.onload = function () {
    getComments(getCommentLS());
}

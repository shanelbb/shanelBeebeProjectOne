// Section selector
const commentSection = document.querySelector('.postComments');
newComments = document.createElement('div');
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
    }
    newComment.name = userName.value
    newComment.comment = userComment.value
    newComment.date = newDate
    return newComment
}

// Creates the click event that saves comments in LS and adds comments to page
document.addEventListener('click', (e) => {
    if (e.target && e.target.className === 'successBtn') {          
        // variable to store newly added comment
        const addedComment = assignCommentObj()

        // variable to store comments in LS
        const storedData = getCommentLS();

        // Checks if there are stored comments in LS
        if (storedData) {
            // If there are stored comments, adds new comment to them
            addToStoredCommentsArray(storedData, addedComment)
        } else {
            // if no stored comments, saves new comment in LS
            addCommentLS(addedComment)
        }
        
        // Clears the comments div
        newComments.innerHTML = '';

        // get all comment data from local storage
        const comments = getCommentLS();
        
        // adds comments to the page
        getComments(comments);
    }
})


// Function to add comment data to local storage
function addCommentLS(commentId) {
    localStorage.setItem('commentsData', JSON.stringify(commentId));  
}

// Function to add new comment to existing comments
const addToStoredCommentsArray = (data, value) => {
    data.push(value);
    localStorage.setItem('commentsData', JSON.stringify(data));
}

// Function to retrieve comment data from local storage
function getCommentLS() {
    const localData = localStorage.getItem('commentsData');
    return localData ? JSON.parse(localData) : [];
}


// Function to add comments to the page
const getComments = (saved) => {

    // Loops through comment data and creates a comment element for each
    for (let i = 0; i < saved.length; i++){
        // create div for comments to live in
        const commentDiv = document.createElement('div');
        commentDiv.classList.add('comment')
        newComments.appendChild(commentDiv);
                
        // Add an image to comment
        const commentImg = document.createElement('img');
        commentImg.src = "../assets/anon-user.png"
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
        dateP.innerText = saved[i].date
    }

    document.getElementById('userForm').reset();
}

// Prints comments saved in local storage to page on page load
window.onload = function () {
    getComments(getCommentLS());
}

const commentSection = document.querySelector('.postComments');
const currentDate = new Date();
const newDate = currentDate.toUTCString()

const commentData = []

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


document.addEventListener('click', (e) => {
    if (e.target && e.target.className === 'successBtn') {          
        
        commentData.push(assignCommentObj())
        
        console.log(commentData);
        
        addCommentLS(commentData)
        
        const comments = getCommentLS();
        getComments(comments)
    }
})

function addCommentLS(commentId) {
    localStorage.setItem('commentsData', JSON.stringify(commentId));
    
}

function getCommentLS() {
    const localData = localStorage.getItem('commentsData')
    
    return localData ? JSON.parse(localData) : []

    // return savedComments === null ? [] : savedComments;

}

const getComments = (saved) => {

    for (let i = 0; i < saved.length; i++){
        // create div for comments to live in
        const commentDiv = document.createElement('div');
        commentDiv.classList.add('comment')
        commentSection.appendChild(commentDiv);
                
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
        // const nameVal = savedComments[0];
        bubble.appendChild(h4);
        h4.innerText = saved[i].name;
                
        //add p with comment 
        const commentP = document.createElement('p');
        // const commentVal = savedComments[1];
        bubble.appendChild(commentP)
        commentP.innerText = saved[i].comment
                
        //add p with date 
        const dateP = document.createElement('p');
        dateP.classList.add('commentDate')
        bubble.appendChild(dateP);
        dateP.innerText = saved[i].date
    }

    document.getElementById('userForm').reset();
}

window.onload = function () {
    getComments(getCommentLS());
}

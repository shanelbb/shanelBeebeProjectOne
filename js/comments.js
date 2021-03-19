const commentSection = document.querySelector('.postComments');
const currentDate = new Date();
const newDate = currentDate.toUTCString()
const commentData = {
    name: userName.value,
    comment: userComment.value,
    date: newDate
}



document.addEventListener('click', (e) => {
    if (e.target && e.target.className === 'successBtn') {
        commentData.name = userName.value
        commentData.comment = userComment.value
        commentData.date = newDate
        localStorage.setItem('commentData', JSON.stringify(commentData));

        getComments();
    }
    })

const getComments = () => {
    const savedComments = JSON.parse(localStorage.getItem('commentData'))

    console.log(savedComments);
    
    
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
    h4.innerText = savedComments.name;
            
    //add p with comment 
    const commentP = document.createElement('p');
    // const commentVal = savedComments[1];
    bubble.appendChild(commentP)
    commentP.innerText = savedComments.comment
            
    //add p with date 
    const dateP = document.createElement('p');
    dateP.classList.add('commentDate')
    bubble.appendChild(dateP);
    dateP.innerText = savedComments.date
    document.getElementById('userForm').reset();

}

window.onload = function () {
    getComments();
}

const commentSection = document.querySelector('.postComments');

document.addEventListener('click', (e) => {
    if (e.target && e.target.className === 'successBtn') {

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
        const nameVal = userName.value;
        bubble.appendChild(h4);
        h4.innerText = nameVal;

        //add p with comment 
        const commentP = document.createElement('p');
        const commentVal = userComment.value;
        bubble.appendChild(commentP)
        commentP.innerText = commentVal

        //add p with date 
        const dateP = document.createElement('p');
        dateP.classList.add('commentDate')
        bubble.appendChild(dateP);
        const currentDate = new Date()
        dateP.innerText = currentDate.toUTCString()

        document.getElementById('userForm').reset();
    }
})
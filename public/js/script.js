
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("logout-button").addEventListener("click", async () => {
        const loggedInStatus = await fetch('/api/user/logout', {
        method: "POST"
        });

        
            window.location.href = '/login';
         
    });


});


async function logIn(event){
    event.preventDefault();
    const email = event.target[0].value;
    const password = event.target[1].value;

    if(!email || !password){
        console.log("Please enter a password")
        return;
    }

    try{
        const loggedIn = await fetch('/api/user/login', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })

        if(loggedIn.status === 200){
            window.location.href = '/home';
        } else {
            const message = await loggedIn.json();
            console.log(message)
        }

    } catch(err){
        
    }
}


async function addComment(event){
    event.preventDefault();
    const post_id = document.querySelector(".post").getAttribute("id");

    const content = event.target[0].value;
    
    try{
        const newComment = await fetch('/api/comments', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                content,
                post_id
            })
        });

        if(newComment.status === 201){
            window.location.reload();
        }
    } catch (err){
        console.log(err)
    }

}

async function editPost(){

}

async function deletePost() {
    const post_id = document.querySelector(".post").getAttribute("id");

    try {
        const deletedPost = await fetch('/api/posts', {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                post_id
            })
        });
    

        // A more general success check (200 OK or 204 No Content)
        if (deletedPost.status === 410) {
            window.location.href = '/home';
        } else {
            // Handle server errors or unsuccessful deletion
            console.error('Failed to delete the post. Status:', deletedPost.status);
        }
    } catch (err) {
        console.error('Error:', err);
    }
}

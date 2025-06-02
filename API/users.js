async function getUserData() {
    console.log("I'm Inside getUserData function");

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const usersData = await response.json();
        console.log(usersData);
    } catch (error) {
        console.error("Error fetching user data:", error);
    }
}
async function getUsers() {
    console.log("GET /users");
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const usersData = await response.json();
        console.log(usersData);
    } catch (error) {
        console.error("Error fetching users:", error);
    }
}
async function getPosts() {
    console.log("GET /posts");
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const postsData = await response.json();
        console.log(postsData);
    } catch (error) {
        console.error("Error fetching posts:", error);
    }
}

async function getPostById(postId) {
    console.log(`GET /posts/${postId}`);
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        const postData = await response.json();
        console.log(postData);
    } catch (error) {
        console.error(`Error fetching post ${postId}:`, error);
    }
}

async function getCommentsForPost(postId) {
    console.log(`GET /posts/${postId}/comments`);
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
        const commentsData = await response.json();
        console.log(commentsData);
    } catch (error) {
        console.error(`Error fetching comments for post ${postId}:`, error);
    }
}

async function getCommentsByPostId(postId) {
    console.log(`GET /comments?postId=${postId}`);
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
        const commentsData = await response.json();
        console.log(commentsData);
    } catch (error) {
        console.error(`Error fetching comments by postId ${postId}:`, error);
    }
}

async function createPost(newPost) {
    console.log("POST /posts");
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPost)
        });
        const createdPost = await response.json();
        console.log(createdPost);
    } catch (error) {
        console.error("Error creating post:", error);
    }
}

async function updatePost(postId, updatedPost) {
    console.log(`PUT /posts/${postId}`);
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedPost)
        });
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error(`Error updating post ${postId}:`, error);
    }
}

async function patchPost(postId, partialUpdate) {
    console.log(`PATCH /posts/${postId}`);
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(partialUpdate)
        });
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error(`Error patching post ${postId}:`, error);
    }
}


async function deletePost(postId) {
    console.log(`DELETE /posts/${postId}`);
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
            method: "DELETE"
        });
        if (response.ok) {
            console.log(`Post ${postId} deleted successfully.`);
        } else {
            console.error(`Failed to delete post ${postId}.`);
        }
    } catch (error) {
        console.error(`Error deleting post ${postId}:`, error);
    }
}

//getUserData();
//getUsers();
//getPosts();
//getPostById(1);
//getCommentsForPost(1);
//getCommentsByPostId(1);
//createPost({ name: "John Doe", email: "john.doe@example.com" });
//updatePost(1, { name: "Jane Doe", email: "jane.doe@example.com" });
//patchPost(1, { name: "Jane Doe" });
//deletePost(1);




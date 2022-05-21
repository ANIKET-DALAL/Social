const {Post, User} = require('../db/models')

async function createNewPost(user, title, body, image) {
    const post = await Post.create({
        title,
        body,
        user,
        image
    })
    return post
}

async function findAllPosts() {
    const posts = await Post.find().populate('user')
    return posts
}

async function findUserPosts(query) {
    const posts = await Post.find({user: query}).populate('user')
    return posts
}

async function updateLikes(query,query2){
    const post = await Post.findById(query);
    for(let i=0;i<post.liked_by.length;i++){
        if(query2==post.liked_by[i]){
            return null  
        }
    }
    let curr_likes = post.likes 
    let arr = post.liked_by
    arr.push(query2)
    await Post.findByIdAndUpdate(query, {likes: curr_likes+1, liked_by: arr})
    return post
}

module.exports = {
    createNewPost,
    findAllPosts,
    findUserPosts,
    updateLikes
}
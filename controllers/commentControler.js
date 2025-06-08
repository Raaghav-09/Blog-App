// import model
const Post = require('../models/postModel') ; 
const Comment = require('../models/commentModel') ; 

// buisness logic 
exports.createComment = async (req , res) => {
  try{
    // fetch data from req body
    const {post,user,body} = req.body ; 
    // One method is to use create function and
    //  another method is to create a object first and then save it , we are using the second one here
    const comment = new Comment({
      post , user , body 
    }) ; 

    // save the new comment into the database
    const savedComment = await comment.save() ;
    const updatedPost = await Post.findByIdAndUpdate(post , {$push : {comments : savedComment._id}} , {new : true}).populate("comments").exec() ; 
    // here , new : true returns the updated object 
    // we use $push for inserting anything and $pull for removing anything 

    res.json({
      post : updatedPost
    }) ; 
  }
  catch(error){
    return res.status(500).json({
      error : "Error while creating comment" , 
    })
  }
}
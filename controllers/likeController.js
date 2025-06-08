const Post = require('../models/postModel') ; 
const Like = require('../models/likeModel') ; 

exports.likePost = async (req , res) => {
  try{
    const {post , user} = req.body ; 

    const liked = await Like.create({
      post , user 
    }) ; 

    const updatedPost = await Post.findByIdAndUpdate(post , {$push : {likes : liked._id}} , {new : true}).populate('likes').exec() ; 

    res.status(201).json({
      post : updatedPost 
    })
  }
  catch(error){
    console.log(error) ;
    res.status(500).json({
      error : "Error while liking post."
    })
  }
}

exports.unlikePost = async (req,res) => {
  try{
    const {post,like} = req.body ;  
    const updatedPost = await Post.findByIdAndUpdate(post , {$pull : {likes : like._id}},{new : true}) ; 

    const deletedLike = await Like.findByIdAndDelete(like) ; 
    res.status(200).json({
      post : updatedPost ,
      like : deletedLike 
    })
  }
  catch(error){
    console.log(error) ;
    res.status(500).json({
      error : "Error while unliking post."
    })
  }
}


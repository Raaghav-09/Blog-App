const Post = require('../models/postModel') ; 


exports.createPost = async (req ,res) => {
  try{
    const {title , body} = req.body ; 
    const savedPost = await Post.create({
      title , body
    }) ; 

    res.status(201).json({
      post : savedPost 
    })    

  }
  catch(error){
    console.log(error) ;
    res.status(500).json({
      error : "Error while creating post."
    })
  }
}
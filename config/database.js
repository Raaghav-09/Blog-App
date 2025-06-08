const mongoose = require('mongoose') ; 

require('dotenv').config() ; 

const databaseUrl = process.env.DATABASE_URL ; 

const dbConnect = () => {
  mongoose.connect(databaseUrl)
  .then(
    console.log("DB Connected Successfully . ") 
  )
  .catch((error)=> {
    console.log("DB Facing connection issues") ; 
    console.log(error) ; 
    process.exit(1) ; 
  })
}

module.exports = dbConnect ; 
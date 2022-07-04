const Model = require("../models/index");


const getUser = async(req,res)=>{
    try{
      const arrayUsers=  await Model.User.findAll();
      const users = await arrayUsers.map((user)=>{
        return{
          usuario:{
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            image: user.image,
          }
        }
      })
      res.status(200).json(users)
    } catch(error){
      res.status(400).json(error.message)
    }
}
  
  
  
  
module.exports = { getUser };
  
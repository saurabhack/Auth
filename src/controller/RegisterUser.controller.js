const User=require("../models/user.models.js")
async function registerUser(req,res){
    const body=req.body
    await User.create({
        name:body.fullName,
        email:body.email,
        password:body.password
    })
    return res.render('home')
}
module.exports=registerUser
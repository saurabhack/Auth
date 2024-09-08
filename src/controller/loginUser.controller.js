const User=require("../models/user.models.js")
const {v4:uuidv4}=require('uuid')
const {setUser}=require("../service/auth.js")
async function loginUser(req,res){
    const {email,password}=req.body
    const user= await User.findOne({email,password})
    if(user){
        return res.redirect('/api/')
        const sessionId=uuidv4()
        setUser(sessionId,user)
        res.cookie('uid',sessionId)
    }else{
        return res.render('login',{
            error:"invalid username and password please try again"
        })
    }
}
module.exports=loginUser
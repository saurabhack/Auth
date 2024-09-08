const express=require("express")
const registerUser = require("../controller/RegisterUser.controller.js")
const loginUser = require("../controller/loginUser.controller.js")

const router=express.Router()


router.post('/registerUser',registerUser)
router.get('/signup',(req,res)=>{
    return res.render('signup')
})

router.get('/login',(req,res)=>{
    return res.render('login')
})

router.post('/loginUser',loginUser)

router.get('/',(req,res)=>{
    res.render("home")
})
module.exports=router
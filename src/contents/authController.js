const jwt = require("jsonwebtoken")

exports.login=(req,res)=>{
    const {userName, password} = req.body
    res.json({
        data:"Login test"
    })
}
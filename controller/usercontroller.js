const User = require('../model/data')

exports.createUser = async(req,res)=>{
    
    const user = new User({
        id:req.body.id,
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        role:req.body.role
    })
    

    try{
       

        const a1 =await user.save()
        res.json(a1)


    }
    catch(err){
        res.send('error'+err)
    }

}

exports.updateUser = async(req,res)=>{
    try{
        const user = await User.findById(req.params.id)
        user.name = req.body.name
        user.email = req.body.email
        user.role =req.body.role
        const a1 = await user.save()
        res.json(a1)
    }
    catch(err){
        res.send('Error'+err)
    }
}

exports.deleteUser =async(req,res)=>{
    try{
        const user = await User.findByIdAndRemove(req.params.id)
        res.send("Record Deleted")

        

    }
    catch(err){
        res.send('Error'+err)
    }
}

exports.getById = async(req,res)=>{
    try{
        const user = await User.findById(req.params.id)
        res.json(user)
    }
    catch(err){
    res.send("Error"+err)
    }
}

exports.getAll = async(req,res)=>{
    try{
        const users = await User.find()
        res.json(users)
    }
    catch(err){
    res.send('Get Requested')
    }
}
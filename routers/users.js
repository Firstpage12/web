const express = require('express');
const router = express.Router;

const users =[{id:1,name:'Anishka',email:'anishka@gmail.com'}]

router.get('/',(_,res)=>{
    res.send('Your express App');
});

router.get('/users',(_,res)=>{
    res.json({ok:true,users});
});
router.get('/user/:id',(req,res)=>{
    const {id}=req.params;
    const user =users.filter((user)=>user.id ==id)[0];
    res.json({ok:true,user});
});
router.post('/adduser',(req,res)=>{
    const {id,name,email}=req.body;
    if(id ){
        users.push({name,email});
        res.json({ok:true,users});
    }
});

router.delete('/user/:id',(req,res)=>{

    const{id}=req.params;
    users.delete(users.filter((user)=>user.id==id)[0]);
    res.json({ok:true,users});
});

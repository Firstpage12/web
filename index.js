const express = require('express');
const bodyparser = require('body-parser');

const app=express();
const port = process.env.PORT || 4041;

app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

var users =[{id:'1',name:'Anishka',email:'anishka@gmail.com'},
{id:'2',name:'Tanuu',email:'tanuu@gmail.com'}]

app.get('/',(_,res)=>{
    res.send('Your express App');
});

app.get('/users',(_,res)=>{
    res.json({ok:true,users});
});
app.get('/user/:id',(req,res)=>{
    var {id}=req.params;
    var user =users.filter((user)=>user.id ==id)[0];
    res.json({ok:true,user});
});
app.post('/adduser',(req,res)=>{
    var {id,name,email}=req.body;
    if(id ){
        users.push({id,name,email});
        res.json({ok:true,users});
    }
});


app.delete('/delete/:id',(req,res)=>{

    

    var  id=req.params.id;
    var newuser = users.filter(el=>el.id !=id);
    users = newuser;
  
     res.json({ok:true,users});

    
});

app.put('/update/:id',(req,res)=>{
    var id =req.params.id
    var name =req.body.name;
    var email=req.body.email;

    var index = users.findIndex(el=>el.id ==id)

   

    users[index]={
        ...users[index],
        name:name,
        email:email

    }
    res.json({ok:true,users})

    
})




app.listen(port,()=>{
    console.log('server is running on port:',port);
});
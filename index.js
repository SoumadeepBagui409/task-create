const express = require('express');
const app = express();
const path = require('path');
const User = require('./model/users');
const mongoose = require('mongoose');
const SeedDb = require('./seedDB');



app.use(express.json())
mongoose.connect('mongodb://localhost:27017/Booking-Task');

//seedDb();


app.get('/',(req,res)=>{
    res.send('Working');
})

app.get('/getUser',async(req,res)=>{
    res.send(await User.find({}));
})

app.post('/payment',async(req,res)=>{
    const {userID} =req.body;
   console.log(typeof userID);
    try{
        const ID = new mongoose.Types.ObjectId(userID);
        const findUser = await User.findById(ID);
    
        if(findUser){
            findUser.isPaymentMade = true;
           for(let obj of findUser.referredUser){
            //    const temp = obj.toString();
                const userRef = await User.findById(obj);
                userRef.TotalEarning+=10;
                await userRef.save();
           }
           await findUser.save();
           res.send("Task Completed");
        }
        else res.send("Not found");
    }catch(err){
        res.send(err.message);
    }
   
})









app.listen(3000);
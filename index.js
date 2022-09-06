const express = require('express');
const app = express();

var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var nodemailer = require('nodemailer');

app.use(bodyParser.json())//is use for teking data into json format
//app.use(express.static('public'))// send static html page
app.use('/public',express.static(__dirname +'/public'));
app.use(bodyParser.urlencoded({extended: true})) //convert into html format
mongoose.connect('mongodb://localhost:27017/DesignGalagy',{useNewUrlParser:true,useUnifiedTopology:true}); // connect to MongoDB database server
var db = mongoose.connection;// establish connection to MongoDB
db.on('error',()=>{console.log('Error in database connection');});
var email;
app.post('/index.html',(req, res)=>{
    let name = req.body.name;
    let email = req.body.email;
    let phone = req.body.phone;
    let subject = req.body.subject;
    let message = req.body.message;
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'statuszindagi470@gmail.com',
          pass: 'zzgpvrjlizeqnyep'
        }
      });
      
      var mailOptions = {
        from: 'statuszindagi470@gmail.com',
        to: email,
        subject: 'Requirment from :'+name,
        text: subject +' Requirment for '+name+' contact no:'+phone+' other requirements :'+message
      };
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
    res.set({
        "Allow-access-Allow-Origin":'*'
    })
    return res.sendFile(__dirname+'/index.html')
})
app.post('/SignUp',(req, res)=>{
    var name = req.body.name;
    email = req.body.email;
    var phone = req.body.phone;
    var password = req.body.password;
    console.log(name.value)
        var data = {
            'name': name,
            'email': email, 
            'phone': phone, 
            'password':password
        }
        console.log(data);
        db.collection("User").find(data).toArray(function(err, result) {
            if (err) throw err;
            try{
                result[0]['email']  
                res.redirect('http://localhost:3000')             
            }
            catch{
                db.collection("User").insertOne(data,(err,collection)=>{
                    if(err) throw err;
                    console.log('successfully insert data');
                });   
                
                console.log('pankaj') 
                res.redirect('http://localhost:4000/index.html')//redirect to success page
            }
        });
})
app.post('/login',(req, res)=>{
    email = req.body.email;
    var password = req.body.password;
    if(password==''){ 
        res.set({
            "Allow-access-Allow-Origin":'*'
        })
        return res.sendFile(__dirname+'/login.html')
    }
    else if(!email.match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/) || email == ""){ 
        res.set({
            "Allow-access-Allow-Origin":'*'
        })
        return res.sendFile(__dirname+'/login.html')
    }
    else{
    var data = {
        'email': email,
        'password': password
    }
    db.collection("User").find(data).toArray(function(err, result) {
        if (err) throw err;
        try{
            if(result[0]['email']==email && result[0]['password']==password){
                res.set({
                    "Allow-access-Allow-Origin":'*'
                })
                return res.sendFile(__dirname+'/index.html')
            }
            else{
                res.set({
                    "Allow-access-Allow-Origin":'*'
                })
                return res.sendFile(__dirname+'/login.html')
            }
        }
       catch{
        res.set({
            "Allow-access-Allow-Origin":'*'
        })
        return res.sendFile(__dirname+'/login.html')
       }
      });
    //return res.sendFile(__dirname+'/login.html')//redirect to success page
}})
app.post('/feedback',(req, res)=>{
    let ret= req.body.rating;
    let ret1= req.body.rating1;
    let ret2= req.body.rating2;
    let subject = req.body.subject;
    let com = req.body.commentText;
    let fdata={email:{'overall experience':ret1,'selected service':subject,'Plane Expirence':ret2,'comment':com}}
    console.log(fdata);
    db.collection("Feedback").insertOne(fdata,(err,collection)=>{
        if(err) throw err;
        console.log('successfully insert data');
    });
    return res.sendFile(__dirname+'/index.html')
})

app.get('/signup.html',(req,res)=> {
    res.set({
        "Allow-access-Allow-Origin":'*'
    })
    return res.sendFile(__dirname+'http://localhost:3000/')
})
app.get('/feedback.html',(req,res)=> {
    res.set({
        "Allow-access-Allow-Origin":'*'
    })
    return res.sendFile(__dirname+'/feedback.html')
})
app.get('/gallery.html',(req,res)=> {
    res.set({
        "Allow-access-Allow-Origin":'*'
    })
    return res.sendFile(__dirname+'/gallery.html')
})
app.get('/aboutus.html',(req,res)=> {
    res.set({
        "Allow-access-Allow-Origin":'*'
    })
    return res.sendFile(__dirname+'/aboutus.html')
})
app.get('/order.html',(req,res)=> {
    res.set({
        "Allow-access-Allow-Origin":'*'
    })
    return res.sendFile(__dirname+'/order.html')
})
app.get('/services.html',(req,res)=> {
    res.set({
        "Allow-access-Allow-Origin":'*'
    })
    return res.sendFile(__dirname+'/services.html')
})
app.get('/index.html',(req,res)=> {
    res.set({
        "Allow-access-Allow-Origin":'*'
    })
    return res.sendFile(__dirname+'/index.html')
})
app.get('/cal.html',(req,res)=> {
    res.set({
        "Allow-access-Allow-Origin":'*'
    })
    return res.sendFile(__dirname+'/cal.html')
})
app.get('/int.html',(req,res)=> {
    res.set({
        "Allow-access-Allow-Origin":'*'
    })
    return res.sendFile(__dirname+'/int.html')
})

//++++++++++++++++++++++++++++++



.get('/images/Pendant/1.webp',(req,res)=> {
    res.set({
        "Allow-access-Allow-Origin":'*'
    })
    return res.sendFile(__dirname+'/images/Pendant/1.webp')
})

.get('/images/Pendant/2.webp',(req,res)=> {
    res.set({
        "Allow-access-Allow-Origin":'*'
    })
    return res.sendFile(__dirname+'/images/Pendant/2.webp')
})
app.get('/images/Pendant/3.webp',(req,res)=> {
    res.set({
        "Allow-access-Allow-Origin":'*'
    })
    return res.sendFile(__dirname+'/images/Pendant/3.webp')
})

.get('/images/Pendant/3.webp',(req,res)=> {
    res.set({
        "Allow-access-Allow-Origin":'*'
    })
    return res.sendFile(__dirname+'/images/Pendant/3.webp')
})

.get('/images/Pendant/4.webp',(req,res)=> {
    res.set({
        "Allow-access-Allow-Origin":'*'
    })
    return res.sendFile(__dirname+'/images/Pendant/4.webp')
})

.get('/images/Pendant/5.webp',(req,res)=> {
    res.set({
        "Allow-access-Allow-Origin":'*'
    })
    return res.sendFile(__dirname+'/images/Pendant/5.webp')
})

.get('/images/Pendant/6.webp',(req,res)=> {
    res.set({
        "Allow-access-Allow-Origin":'*'
    })
    return res.sendFile(__dirname+'/images/Pendant/6.webp')
})




//+++++++++++++++++++++++++++++


.get('/images/Chandelier/1.webp',(req,res)=> {
    res.set({
        "Allow-access-Allow-Origin":'*'
    })
    return res.sendFile(__dirname+'/images/Chandelier/1.webp')
})

.get('/images/Chandelier/2.webp',(req,res)=> {
    res.set({
        "Allow-access-Allow-Origin":'*'
    })
    return res.sendFile(__dirname+'/images/Chandelier/2.webp')
})
app.get('/images/Chandelier/3.webp',(req,res)=> {
    res.set({
        "Allow-access-Allow-Origin":'*'
    })
    return res.sendFile(__dirname+'/images/Chandelier/3.webp')
})

.get('/images/Chandelier/3.webp',(req,res)=> {
    res.set({
        "Allow-access-Allow-Origin":'*'
    })
    return res.sendFile(__dirname+'/images/Chandelier/3.webp')
})

.get('/images/Chandelier/4.webp',(req,res)=> {
    res.set({
        "Allow-access-Allow-Origin":'*'
    })
    return res.sendFile(__dirname+'/images/Chandelier/4.webp')
})

.get('/images/Chandelier/5.webp',(req,res)=> {
    res.set({
        "Allow-access-Allow-Origin":'*'
    })
    return res.sendFile(__dirname+'/images/Chandelier/5.webp')
})

.get('/images/Chandelier/6.webp',(req,res)=> {
    res.set({
        "Allow-access-Allow-Origin":'*'
    })
    return res.sendFile(__dirname+'/images/Chandelier/6.webp')
})
.get('/images/Chandelier/7.webp',(req,res)=> {
    res.set({
        "Allow-access-Allow-Origin":'*'
    })
    return res.sendFile(__dirname+'/images/Chandelier/7.webp')
})

.get('/images/Chandelier/8.webp',(req,res)=> {
    res.set({
        "Allow-access-Allow-Origin":'*'
    })
    return res.sendFile(__dirname+'/images/Chandelier/8.webp')
})
.get('/images/Chandelier/9.webp',(req,res)=> {
    res.set({
        "Allow-access-Allow-Origin":'*'
    })
    return res.sendFile(__dirname+'/images/Chandelier/9.webp')
})


//++++++++++++++++++++++++++++++++



.get('/images/Tables/1.webp',(req,res)=> {
    res.set({
        "Allow-access-Allow-Origin":'*'
    })
    return res.sendFile(__dirname+'/images/Tables/1.webp')
})

.get('/images/Tables/2.webp',(req,res)=> {
    res.set({
        "Allow-access-Allow-Origin":'*'
    })
    return res.sendFile(__dirname+'/images/Tables/2.webp')
})
app.get('/images/Tables/3.webp',(req,res)=> {
    res.set({
        "Allow-access-Allow-Origin":'*'
    })
    return res.sendFile(__dirname+'/images/Tables/3.webp')
})

.get('/images/Tables/3.webp',(req,res)=> {
    res.set({
        "Allow-access-Allow-Origin":'*'
    })
    return res.sendFile(__dirname+'/images/Tables/3.webp')
})

.get('/images/Tables/4.webp',(req,res)=> {
    res.set({
        "Allow-access-Allow-Origin":'*'
    })
    return res.sendFile(__dirname+'/images/Tables/4.webp')
})

.get('/images/Tables/5.webp',(req,res)=> {
    res.set({
        "Allow-access-Allow-Origin":'*'
    })
    return res.sendFile(__dirname+'/images/Tables/5.webp')
})

.get('/images/Tables/6.webp',(req,res)=> {
    res.set({
        "Allow-access-Allow-Origin":'*'
    })
    return res.sendFile(__dirname+'/images/Tables/6.webp')
})
.get('/images/Tables/7.webp',(req,res)=> {
    res.set({
        "Allow-access-Allow-Origin":'*'
    })
    return res.sendFile(__dirname+'/images/Tables/7.webp')
})




//+++++++++++++++++++++++++++++



.get('/images/Frames/1.webp',(req,res)=> {
    res.set({
        "Allow-access-Allow-Origin":'*'
    })
    return res.sendFile(__dirname+'/images/Frames/1.webp')
})

.get('/images/Frames/2.webp',(req,res)=> {
    res.set({
        "Allow-access-Allow-Origin":'*'
    })
    return res.sendFile(__dirname+'/images/Frames/2.webp')
})
app.get('/images/Frames/3.webp',(req,res)=> {
    res.set({
        "Allow-access-Allow-Origin":'*'
    })
    return res.sendFile(__dirname+'/images/Frames/3.webp')
})

.get('/images/Frames/3.webp',(req,res)=> {
    res.set({
        "Allow-access-Allow-Origin":'*'
    })
    return res.sendFile(__dirname+'/images/Frames/3.webp')
})

.get('/images/Frames/4.webp',(req,res)=> {
    res.set({
        "Allow-access-Allow-Origin":'*'
    })
    return res.sendFile(__dirname+'/images/Frames/4.webp')
})

.get('/images/Frames/5.webp',(req,res)=> {
    res.set({
        "Allow-access-Allow-Origin":'*'
    })
    return res.sendFile(__dirname+'/images/Frames/5.webp')
})

.get('/images/Frames/6.webp',(req,res)=> {
    res.set({
        "Allow-access-Allow-Origin":'*'
    })
    return res.sendFile(__dirname+'/images/Frames/6.webp')
})
.get('/images/Frames/7.webp',(req,res)=> {
    res.set({
        "Allow-access-Allow-Origin":'*'
    })
    return res.sendFile(__dirname+'/images/Frames/7.webp')
})

.get('/thankyou.html',(req,res)=> {
    res.set({
        "Allow-access-Allow-Origin":'*'
    })
    return res.sendFile(__dirname+'/thankyou.html')
})

.get('/payment.html',(req,res)=> {
    res.set({
        "Allow-access-Allow-Origin":'*'
    })
    return res.sendFile(__dirname+'/payment.html')
})

app.get('/',(req,res)=> {
    res.set({
        "Allow-access-Allow-Origin":'*'
    })
    return res.sendFile(__dirname+'/login.html')
}).listen(4000);
console.log('Starting server on 4000 port');



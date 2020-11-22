const express=require('express');
const bodyParser=require('body-parser');
const request=require('request');
const client = require("mailchimp-marketing");

const app=express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
  res.sendFile(__dirname+"/public/signin.html");
});

app.post("/",function(req,res){
  const firstName=req.body.fName;
  const lastName=req.body.lName;
  const email=req.body.inputEmail;

  client.setConfig({
    apiKey: "24fefc58bee1c543eb6619a390e4294c-us2",
    server: "2",
  });

  const run = async () => {
    const response = await client.authorizedApps.link({
      client_id: "client_id",
      client_secret: "client_secret",
    });
    console.log(response);
  };

  run();

});

app.listen(process.env.PORT || 3000,function(){
  console.log("App listening at port 3000");
});






//api key -- 24fefc58bee1c543eb6619a390e4294c-us2

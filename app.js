const express=require("express");
const bodyParser=require("body-parser");
const date=require(__dirname+"/date.js");

const app=express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

var item=["Task1","Task2"];
var workitem=[];
app.get("/",function(req,res)
{
  let day=date.getDate();
  res.render("lists",{typeofday: day,newItem:item});
});
app.post("/",function(req,res)
{
  console.log(req.body);
  if (req.body.button=="Work")
  {
    workitem.push(req.body.usrinput);
    res.redirect("/work");
  }
  else
  {
    item.push(req.body.usrinput);
    res.redirect("/");
  }
});

app.get("/work",function(req,res)
{
  res.render("lists",{typeofday: "Work Items",newItem: workitem});
});

app.post("/work",function(req,res)
{
  item.push(req.body.usrinput);
  res.redirect("/work");
});

app.listen(3000,function()
{
    console.log("Kaam ho gaya h Maharaj Yash");
});

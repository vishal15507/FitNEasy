const express=require("express")
const app=express();

const path=require("path");

app.use(express.static(path.join(__dirname,"Static")))


app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"))


//Home page
app.get("/",(req,res)=>{
    res.render("home/index.ejs");
})

app.get("/diet",(req,res)=>{
    res.render("toFollow/followDiet.ejs");
})

app.get("/hydration",(req,res)=>{
    res.render("toFollow/hydration.ejs");
})

app.get("/exercise",(req,res)=>{
    res.render("toFollow/calories.ejs");
})

app.get("/end_page",(req,res)=>{
    res.render("end/end_topic.ejs");
})

//setting up 404
app.get("/:page",(req,res)=>{
    res.send("page not found")
})

app.listen(3000,()=>{
    console.log("listening on port 3000");
})
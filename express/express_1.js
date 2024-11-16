const exp = require("express");
const app=exp();
const myfun=require('./middleware')
const morgan=require(`morgan`)
const courses=[
    {id:1,Name:'python'},
    {id:2,Name:"c++"},
    {id:3,Name:'java'}
]
app.use(exp.json())
app.use(function (req,res,next){console.log("hi"); next()})
app.use(myfun)
app.use(morgan())
app.get("/",(req,res)=>{
    res.send('hello from vijay hi')
});
app.get('/about',(req,res)=>{
    res.send(`hello, hi`)
});
app.get('/hi',(req,res)=>{
    res.send("hi")
})
app.get("/courses/:id",(req,res)=>{
    let course=courses.find((element)=>element.id===parseInt(req.params.id))
    if(!course){res.status(404).send('Error occured on our side')}
    res.send(course)
})
app.get('/courses',(req,res)=>{
    res.send(courses)
})
app.post('/courses',(req,res)=>{
    const course={
        id:courses.length+1,
        Name:req.body.Name
    }
    courses.push(course)
    res.send(course)
})
app.put('/coursrs/:coursename',(req,res)=>{
    let course= courses.find((ele)=>ele.Name===(req.params.coursename))
    if(!course){res.status(404).send(`course doesnt exist`)}
    course.Name=req.body.Name
    res.send(courses)
})
app.delete(`/courses/:id`,(req,res)=>{
    let course=courses.find((crs)=>crs.id===parseInt(req.params.id))
    if(!course){res.status(404).send("course doesnt exist ok")}
    let index= courses.indexOf(course)
    courses.splice(index,1)
    res.send(course)
})

const port= process.env.PORT || 3000
app.listen(port,()=>{console.log(`port number is ${port}`)})
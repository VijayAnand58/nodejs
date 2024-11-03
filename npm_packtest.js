const fi=require("figlet")
fi("hello world",(err,data)=>{
    if(err){
        console.log("error")
        console.dir(err)
        return;
    }
    console.log(data)
})
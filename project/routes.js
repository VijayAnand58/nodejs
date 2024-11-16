const express=require('express')
const router= express.Router()
const joi=require('joi')
const mongoose= require('mongoose')
// const category=[
//     {id:1, name:'web'},
//     {id:2, name:'dsa'},
//     {id:3, name:"backend"}
// ]
mongoose.connect('mongodb://127.0.0.1/learning')
    .then(()=>console.log('succesful'))
    .catch((err)=>console.log("error",err))

const categoryschema=mongoose.Schema({
    name:{type:String,required:true,minlength:3,maxlength:300}
})
const cat1= new mongoose.model('Category',categoryschema)

router.get('/categories',async(req,res)=>{
    let category= await cat1.find()
    res.send(category);
});
router.post('/categories/add',async(req,res)=>{
    const { error } = datavalidate(req.body); 
    if (error) { return res.status(400).send(error.details[0].message); }
    const cat= new cat1({
        name:req.body.name
    })
    await cat.save()
    res.send(cat);
});
router.put('/categories/update/:id',async(req,res)=>{
    const {error}=datavalidate(req.body)
    if(error){res.status(400).send(error.details[0].message)}
    const cat= await cat1.findByIdAndUpdate(req.params.id,{name:req.body.name},{new: true})
    if(!cat){return res.status(404).send(`Requested ID doesnt exist`);}
    //if(error){return res.status(404).send(error.details[0].message)}

    // cat.name=req.body.name;
    res.send(cat);
})

router.delete('/categories/delete/:id',async(req,res)=>{
    const cat= await cat1.findByIdAndDelete(req.params.id)
    if(!cat){return res.status(404).send(`cannot delete an element which doesnt exist`)}

    // const index=category.indexOf(cat)
    // category.splice(index,1)
    res.send(cat);
})
router.get('/categories/:id',async(req,res)=>{
    const cat=await cat1.findById(req.params.id)
    if(!cat){return res.status(404).send('no element')};
    res.send(cat)
})
function datavalidate(cat){
    const Schema=joi.object({
        name:joi.string().min(3).required()
    })
    return Schema.validate(cat)
}
module.exports=router
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/testdatabase')
    .then(() => console.log('Connection successful'))
    .catch((err) => console.log(err));

// Schema
const courseSchema = new mongoose.Schema({
    Name: { type: String, required: true, minlength: 2, maxlength: 10 },
    creator: { type: String, required: true },
    category: {
        type: String,
        required: true,
        enum: ['dsa', 'web', 'data']
    },
    tags: {
        type: Array,
        validate: {
            validator: function(tags) {
                return tags.length >= 1;
            },
            message: 'A course should have at least one tag.'
        }
    },
    date: { type: Date, default: Date.now },
    isPublished: { type: Boolean },
    rating: { type: Number }
});

const Course = mongoose.model('Course', courseSchema);

async function createEntry(namev, creatorv, publishedv, ratingv, cat1, tagv) {
    const course = new Course({
        Name: namev,
        creator: creatorv,
        category: cat1,
        tags: tagv,
        isPublished: publishedv,
        rating: ratingv
    });

    try {
        // Validate and save the entry
        await course.validate();
        console.log('Course is valid');
        // Uncomment below to save to database
        const result = await course.save();
        console.log('Course saved:', result);
    } catch (err) {
        console.log('Validation Error:', err.message);
        for(let field in err.errors){
            console.log(err.errors[field])
        }
    }
}

// Call the function with all required fields
createEntry('Java', 'VJ', true, 4.5, 'dsa', ['dsa']);
createEntry('CPP', 'IJ', true, 4.7, 'dsa', ['js']);

// createentry('python','kj',false,3.0)
// createentry('c#','nj',true,1.5)
async function getentry(){
    const course= await Course.find({rating:{$in:[4.5,4.7,3.0]}}).select({Name:1}).and([{creator:"vj"}])
    console.log(course)
}
//getentry()
// eq(equal to)
// gt(greater than)
// lt (less than)
// gte(greater than or equal)
// lte(less than or equal to)
// use {$gte:number}
// {$in:[3,4}]} choose lots of specifics

async function update(id){
    let course= await Course.findById(id);
    if(!course) return;
    course.Name="python";
    course.creator="steve";
    const updatecourse= await course.save()
    console.log(updatecourse)
}
// update('67357be19ec8443a72137cf3');

async function remove(id){
    let course=await Course.findByIdAndDelete(id)
    console.log(course)
}
//remove('67357be19ec8443a72137cf3');
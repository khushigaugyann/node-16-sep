const mongoose = require('mongoose');
async function coonect(){
    try{
        let connection = await mongoose.connect('mongodb://localhost:27017/batch-2');
        console.log("Database connected...");
    }catch(error){
        console.log(error.message, 'msg....');
    }
}
module.exports = coonect
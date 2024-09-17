const Student = require('../models/Student')
async function addStudent(req, res){
    try{
        console.log(req.body, 'req.body');
        let student = new Student(req.body);
        await student.save();//async method
        console.log("Data saved Successfully.....");
        res.end("added....")
    }catch(err){
        console.log(err)
    }
}
async function getStudents(req, res){
    try{
        let students = await Student.find({})
        console.log(students, 'students')
        res.send(students);
    }catch(err){
        console.log(err);
    }
}
async function getStudentByRollNo(req, res){
    try{
        let rollNo = parseInt(req.params.rollNo);
        console.log(rollNo);
        let students = await Student.findOne({rollNo : rollNo});
        console.log(students, 'students')
        res.send(students);
    }catch(err){
        console.log(err);
    }
}
module.exports = {
    addStudent,
    getStudents,
    getStudentByRollNo
}
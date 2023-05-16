const Tasks = require('../models/tasks');

module.exports.home = function(req,res){
    Tasks.find({}).then((data)=>{
        return res.render('home', {
            title: "HOME",
            taskList: data
        })
    })
    
}

module.exports.addTask = function(req,res){
    console.log(req.body);
    Tasks.create({
        ...req.body, completed : false
    });
    return res.redirect('back');
}

module.exports.deleteTask = function(req,res){
    let taskId = req.query.id;
    console.log(taskId);

    Tasks.findByIdAndDelete(taskId).then(()=>{
        return res.redirect('back');
    })

}
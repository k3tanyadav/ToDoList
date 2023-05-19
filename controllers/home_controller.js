const Tasks = require('../models/tasks');

//render home page by fetching data from db
module.exports.home = function(req,res){
    Tasks.find({}).then((data)=>{
        return res.render('home', {
            title: "HOME",
            taskList: data
        })
    })

}

//add task to the database
module.exports.addTask = function(req,res){
    console.log('********add********',req.body);

    let tagColor;
    let category = req.body.category;

    if(category === "Personal") tagColor = "deeppink";
    else if(category === "Work") tagColor = "cornflowerblue";
    else if(category === "School") tagColor = "tomato";
    else tagColor = "slategrey";  

    Tasks.create({
        ...req.body, completed : false, tagColor: tagColor
    });
    return res.redirect('back');
}

//delete task from the database
module.exports.deleteTask = function(req,res){
    let taskId = req.query.id;
    console.log('*********delete********',taskId);

    Tasks.findByIdAndDelete(taskId).then(()=>{
        return res.redirect('back');
    })

}

// handle task toggling (completed/incomplete) in the database
module.exports.modifyTask = function(req,res){
    let taskId = req.query.id;
    let value = req.query.toggle;
    console.log('********modify*********',taskId, value);

    Tasks.updateOne({_id: taskId},{$set: {completed: value}}).then(()=>{
        res.redirect('back');
    });
}
module.exports.profile = function(req,res){
    return res.render('home',{
        title:"profile page"
    })
}

//using the home template for user profile as well
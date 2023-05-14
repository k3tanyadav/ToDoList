const express = require('express');
const port = 8000;
const app = express();
const expressLayouts = require('express-ejs-layouts');

// use static files
app.use(express.static('./assets'));

//use express layouts
app.use(expressLayouts);
// extract stylesheets and scripts of sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

//using express router
app.use('/', require('./routes'));

//set up view engine
app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(port, function(err){
    if(err){
        console.log(`ERROR : ${err}`);
        return;
    }
    console.log(`server running on port : ${port}`);
})
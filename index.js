const express = require('express');
//Loads the handlebars module
const handlebars  = require('express-handlebars');


const app = express();
const port = process.env.PORT || 5000;


//instead of app.set('view engine', 'handlebars'); 
app.set('view engine', 'hbs');
//instead of app.engine('handlebars', handlebars({
app.engine('hbs', handlebars.engine({
        layoutsDir: __dirname + '/views/layouts',
        extname: 'hbs',
        //new configuration parameter
        defaultLayout: 'planB',
}));

app.use(express.static('public'))

// Routes 

app.get('/', (req, res) => {
//Serves the body of the page aka "main.handlebars" to the container //aka "index.handlebars"
    res.render('main', {layout : 'index', name : "penco"});
    // res.render('main');
});

app.listen(port, () => console.log(`App listening to port ${port}`));
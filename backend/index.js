const express = require('express');
const morgan = require('morgan');
const multer = require('multer');
const path = require('path');

//Initialiations
//this is the server
const app = express();

//Settings
app.set('port', 3000);

//Middleware - all middleware in express are functions
app.use(morgan('dev'));
//where are the images going to be stored
const storage = multer.diskStorage({
    destination: path.join(__dirname, 'public/uploads'),
    filename(req, file, cb){
        //call each image with the exact time to have different names
        cb(null, newDate().getTime() + path.extname(file.originalname));
    } 
})
//only one image at a time 
app.use(multer({storage}).single('image'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Routes
app.use('/api/items', require('./routes/items'));

//Static files
app.use(express.static(path.join(__dirname, 'public')));

//Start the server
app.listen(app.get('port'), ()=>{
    console.log('Server listening on port', app.get('port'));
});
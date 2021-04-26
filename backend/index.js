const express = require('express');

//Initialiations
//this is the server
const app = express();

//Settings
app.set('port', 3000);

//Start the server
app.listen(app.get('port'), ()=>{
    console.log('Server listening on port', app.get('port'));
});

//Require the express module
const express = require ('express');

//Assign app to express
const app = express();

//Require secure path
const path = require('path');

//Assign port to listing
const port = process.env.PORT || 3000;

//Add path to static files
app.use(express.static(path.join(__dirname ,'public')));

//Add route
app.get('/',(request,response) => {
  response.send('index.html');
});

//Listen server
app.listen(port, () => console.log (`Listening to the port ${port}!`));

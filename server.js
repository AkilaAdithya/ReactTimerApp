var express = require('express');
//ccreate our app
var app = express();
app.use(express.static('Public'));
app.listen(3000, function(){
    console.log("Server is up an running in port 3000");
});

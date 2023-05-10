const express=require('express');
const bodyparser=require('body-parser');
const App_Server = require('./app');
const Approuter = require('./app');
const Node_server=express();
/*middleware*/
require('./dbconfig');
Node_server.use(bodyparser.json);
Node_server.use(bodyparser.urlencoded({extended:true}));
Node_server.use('/api',App_Server)
/*configure node server*/
const PORT=5000;
Node_server.listen(PORT,'localhost',()=>{
    console.log('SARVER STARTED',PORT)
})
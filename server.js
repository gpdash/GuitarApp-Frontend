const express = require('express'),
      http= require('http'),
      path = require('path'),
      bodyparser=require('body-parser'),
      mongoose=require('mongoose'),
      cors=require('cors')
      route=require('./server/routes/route')
    app=express(),
    port= process.env.PORT || 3001;
    
app.use(cors())
app.use(bodyparser.json())
app.use(express.static(__dirname+'/dist/app-v1'))
app.use('/api',route)
app.get("/", (req,res) => res.sendFile(path.join(__dirname)))

const server =http.createServer(app);
server.listen(port,()=> console.log("Server runnin on ",port))
const express = require('express');
const app = express();
const port = 3000;
const fileServices = require('./services/file.js')

app.get('/',(req, res)=>{
    res.send('hello');
})

app.get('/class/list',(req,res)=>{
    const className = req.query.class
    fileServices.classList(className,(err,data)=>{
        if(err){
            res.json({error:`Class ${className} doesn\'t exist.`})
            return
        }
        res.json(data)
    })
})

app.get('/class/listfromcity',(req,res)=>{
    const className = req.query.class
    const {city} = req.query
    fileServices.classList(className,(err,data)=>{
        if(err){
            res.json({error:`Class ${className} doesn\'t exist.`})
            return
        }
        const obj = {}
        const filterStud = data.students.reduce((acc,studentObj)=>{
            if(studentObj.city === city) acc.push(studentObj)
            return acc
        },[])

        obj.students = filterStud
        res.json(obj)
    })
})

app.listen(port,()=>{
    console.log(`User system running on ${port}`);
})
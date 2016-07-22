/**
 * Created by arpit on 22/7/16.
 */

'use strict';
const express=require('express');
const db=require('./db')
const path=require('path');
const app=express();
const bodyparser=require('body-parser');
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.set('port', process.env.PORT || 4000);

app.use('/',express.static( path.join(__dirname , 'public' )) );

app.post('/addtodo',function (req,res) {
    console.log(req.body);
    db.addtodo({
        id:req.body.id,
        task:req.body.task,
        done:req.body.done
    },function (result) {
        res.send(result)
    })
});

app.get('/fetchtodo',function (req,res) {
   // db.fetchtodo(function (todos) {
     //   res.send(todos)
    //})
})

app.listen(app.get('port',function () {
    console.log("app is running on \n+3000")
}))
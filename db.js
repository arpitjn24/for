/**
 * Created by arpit on 22/7/16.
 */
'use strict';
const mysql=require('mysql');


let connection={};

const createConnection=function () {
    connection=mysql.createConnection({
        host:'localhost',
        user:'todouser',
        database:'tododb'
    });
    return connection;
}
module.exports={
    fetchtodo:function () {
        const conn=createConnection();
        conn.connect();
        var todolist=[];
        conn.query('select * from  todolist',
        function (err,row,field){
            for(let row of rows){
                todolist.push({
                    id:row.id,
                    task:row.task,
                    done:row.done==0?false:true
                })
            }
            cb(todolist);
        });
        conn.end();
    },
    addtodo:function (todo,cb) {

        const conn=createConnection();
        conn.connect();
        const querstring="insert into todolist values("+
                todo.id+","+
            ","+todo.task+"',"+
            todo.done+");";
        conn.query(querstring,function(err,result){
            cb(result);
        });

    },
    deletetodo:function () {

    }

}
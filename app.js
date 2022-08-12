const express = require('express');
const app = express();
const mongoose = require('mongoose');
const db = require('./db/schema');
const mongo = require('./db/mongo');

app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}))
app.get('/',(req,resp)=>{
const code = `Made By Dojeto`;
    resp.render('home');
})

app.get('/new',(req,resp)=>{
    resp.render('new')
})

app.post('/save',async(req,resp)=>{
    try{
        const str = req.body.value;
        const doc = await db.create(
            {
                value : str
            }
        )
        resp.redirect(`/${doc.id}`)
    }
    catch(e)
    {
        resp.status(400).send(e);
    }
})

app.get('/:id',async(req,resp)=>{
    try{
        const id = req.params.id;
        const doc = await db.findById(id)

        resp.render('codeDisplay',{
            code : doc.value
        })
    }
    catch(e)
    {
        resp.redirect('/');
    }

})

app.listen(3000,()=>{
    console.log(`working on 3000`);
})
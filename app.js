const express = require('express');
const bodyParser = require('body-parser')
const app = express();

const PORT = 3000;

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

let blogList = []

app.get('/blogs', (req, res) => {
    return res.status(200).json({
      data: blogList,
      success:true
    })
})

app.post('/blogs', (req,res)=>{
  blogList.push({title: req.body.title, content: req.body.content})
  return res.status(201).json({
    success: true
  })
})

app.listen(PORT, ()=>{
  console.log("Server started on PORT", PORT);
})

const express = require('express')
const cors =require("cors")
const app = express()
app.use(cors())
const port = process.env.PORT || 5000

const allChef=require('./data/chef.json')
const singleChef=require('./data/details.json')
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/allchef',(req,res)=>{
    res.send(allChef)
})
app.get('/chef',(req,res)=>{
    res.send(singleChef)
})
app.get('/chef/:id',(req,res)=>{
    const id = req.params.id
    const selectChef= singleChef.find(s=>s.id==id)
    res.send(selectChef)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
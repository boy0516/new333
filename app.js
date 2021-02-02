const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

// http://127.0.0.1:3000/
app.get('/', (req, res) => res.send('Hello, Nodejs!'))
// http://127.0.0.1:3000/welcom?name=choi
app.get('/welcome',(req, res)=>{
    var user_name = req.param('name')
    res.send('Hi,ther.welcome to the nodejs. [' + user_name +')')
})
app.get('/check',(req, res)=>res.send('Example app listen on port 3000'))
app.listen(port, () => console.log('Example app listen on port 3000'))
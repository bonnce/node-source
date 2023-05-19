const express = require('express')

const app = express()
const port = 3500

app.get('/',(req_,res)=>{
    res.send('Hello world!')
})

app.listen(port, () => {
    console.log(`Example listening on port ${port}`)
})
const express = require('express')

const app = express()
const port = 3500

app.get('/',(req_,res)=>{
    res.send('Helooa world!!')
})

app.listen(port, () => {
    console.log(`Example tasning on port ${port}`)
})
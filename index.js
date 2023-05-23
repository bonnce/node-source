const express = require('express')

const app = express()
const port = 3500

app.get('/',(req_,res)=>{
    res.send('Helloo all the world!!')
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
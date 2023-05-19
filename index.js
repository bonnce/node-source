const express = require('express')

const app = express()
const port = 3500

app.get('/',(req_,res)=>{
    res.send('Helloo vos!!')
})

app.listen(port, () => {
    console.log(`Examples on port ${port}`)
})
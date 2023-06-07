const express = require('express')

const app = express()
const port = 3500

app.get('/',(req_,res)=>{
    res.send('Hellooo world!!')
})

app.listen(port, () => {
    console.log(`Listesing on ports ${port}`)
})
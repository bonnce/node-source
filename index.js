const express = require('express')

const app = express()
const port = 8889

app.get('/',(req,res)=>{
    console.log(`recibido: ${req}`)
    res.send('Hellooo world!!')
})

app.listen(port, () => {
    console.log(`Listesing on port ${port}`)
})
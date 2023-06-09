const express = require('express')

const app = express()
const port = 3500

app.get('/',(req_,res)=>{
    res.send('Hello world!! es una prueba esto')
})

app.listen(port, () => {
    console.log(`Listesing on port ${port}`)
})
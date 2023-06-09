const express = require('express')

const app = express()
const port = 3500

app.get('/',(req_,res)=>{
    res.send('Hello world!! esto es una prueba')
})

app.listen(port, () => {
    console.log(`Listesing on port ${port}`)
})
const express = require('express')

const app = express()
const port = 3500

app.get('/',(req_,res)=>{
    res.send('Hellooa world!!')
})

app.listen(port, () => {
    console.log(`Exammple listening on port ${port}`)
})
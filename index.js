const express = require('express')
const bcrypt = require('bcrypt');
const { reject } = require('bcrypt/promises');

const app = express()
const port = 3000


new Promise((resolve, reject) => {
    const str = "somelongpass";
    resolve(bcrypt.hash(str, 10))
}).then(result => {
    console.log(result);
}).catch(err => {
    console.log(err);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
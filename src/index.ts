import express from "express"
import ip from 'ip'
import os from "os"

const app = express()
const port = 8080


app.get("/", (req, res) => {
    res.send(
        "This server is " +
            os.hostname() +
            " ip: " +
            ip.address() +
            " Access form " +
            req.ip +
            " Timestamp: " +
            Date.now() 
    )
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
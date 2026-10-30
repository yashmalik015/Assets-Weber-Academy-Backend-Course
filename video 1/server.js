const http = require("http");
const port = 3000
const server = http.createServer((req, res) => {
    console.log(req.url)
    // res.end("you are  on assets weber accademy video 1's backend")
    if (req.url === '/' && req.method === "GET") {
        console.log("you are on the home page")
        res.end(`
        <body>
            <h1>
            homepage
        </h1>
        </body>`)
    }
})

server.listen(port, () => {
    console.log(`server is running on port ${port}`)
})
const http =require("http");

const server = http.createServer((req,res) => {
    if(req.url === "/"){
        res.end("<h1>Hello Suresh Koochana</h1>")
    }
})

const PORT = process.env.PORT || 9999;

server.listen(PORT, () => console.log(`Server running on Port http://localhost:${PORT}`));
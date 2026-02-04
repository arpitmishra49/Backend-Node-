import fs from "fs";
import http from "http";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = http.createServer((req, res) => {
    console.log("Request URL:", req.url);
    

    if (req.url === "/") {
        const html = fs.readFileSync(
            path.join(__dirname, "index.html"),
            "utf-8"
        );
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(html);
        return;
    }

    if (req.url === "/style.css") {
        const css = fs.readFileSync(
            path.join(__dirname, "style.css"),
            "utf-8"
        );
        res.writeHead(200, { "Content-Type": "text/css" });
        res.end(css);
        return;
    }

    if (req.url === "/script.js") {
        const js = fs.readFileSync(
            path.join(__dirname, "script.js"),
            "utf-8"
        );
        res.writeHead(200, { "Content-Type": "text/javascript" });
        res.end(js);
        return;
    }

    
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
});

server.listen(4000, () => {
    console.log("Server running at http://localhost:4000");
});

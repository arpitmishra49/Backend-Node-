import http from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import fetch from "node-fetch"; // Required for Node <18

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = http.createServer(async (req, res) => {
    console.log("Request:", req.url);

    if (req.url === "/products") {
        const apiRes = await fetch("https://dummyjson.com/products");
        const data = await apiRes.json();

        let productHTML = "";
        data.products.forEach(p => {
            productHTML += `
                <li>
                    <h2>${p.title}</h2>
                    <img src="${p.thumbnail}" alt="${p.title}" width="100"/>
                </li>
            `;
        });

        const templatePath = path.join(__dirname, "temp.html");
        let html = fs.readFileSync(templatePath, "utf-8");

        html = html.replace("{{products}}", productHTML);

        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(html);
        return;
    }

    if (req.url === "/style.css") {
        const css = fs.readFileSync(path.join(__dirname, "style.css"), "utf-8");
        res.writeHead(200, { "Content-Type": "text/css" });
        res.end(css);
        return;
    }

    // Default route
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Page Not Found");
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});

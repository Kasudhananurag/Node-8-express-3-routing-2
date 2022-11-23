const experss = require("express");
const app = experss();

app.get("",(req,res) => {
    res.send(`<h1>This is home page</h1>
    <a href="/about">About</a>
    `);
});

app.get("/about",(req,res) => {
    res.send(`<h1>This is about page</h1>
    <a href="/">Home</a>
    `);
});

app.listen(3000)
import express from "express";
const app = express();

app.get("/index", () => {
    console.log("Hello from Index");
})

export default app;
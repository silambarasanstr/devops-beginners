import express from "express";

const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  res.send("Change to simbu Hello from Express Server 🚀");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

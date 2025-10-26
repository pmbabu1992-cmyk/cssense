
import express from "express";
import cors from "cors";
const app = express();

app.use(cors()); // Use the cors middleware for all routes

// Define your routes
app.get('/api/data', (req, res) => {
  res.json({ message: 'This is data from your API.' });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 3001;


//Start server
app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
  });
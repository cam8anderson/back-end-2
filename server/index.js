//server
const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
//server

//functions from controller.js
const {
  getAllHouses,
  createHouse,
  updateHouse,
  deleteHouse,
} = require("./controller");

//turns on functions from controller. (if you need a specific part grab it with the id)
app.get(`/api/houses`, getAllHouses);
app.post(`/api/houses`, createHouse);
app.delete(`/api/houses/:id`, deleteHouse);
app.put(`/api/houses/:id`, updateHouse);

//always at the end of a server
app.listen(4004, () => console.log("Server running on port 4004"));

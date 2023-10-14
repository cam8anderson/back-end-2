//connects your database so you can add stuff
const houses = require("./db.json");
//used to distiguish your different parts in your database
let globalId = 4;

//exports the functions to the index.js
module.exports = {
  //if you need something from your previous database
  getAllHouses: (req, res) => {
    res.status(200).send(houses);
  },

  //adding something to your database
  createHouse: (req, res) => {
    //these variables come from main.js
    let { address, price, imageURL } = req.body;
    let newHouse = {
      id: globalId,
      address,
      price,
      imageURL,
    };
    houses.push(newHouse);
    res.status(200).send(houses);
    globalId++;
  },

  //deleting something from your database
  deleteHouse: (req, res) => {
    let index = houses.findIndex((elem) => elem.id === +req.params.id);
    houses.splice(index, 1);
    res.status(200).send(houses);
  },

  //anything that is already in your database and needs to be changed can go here
  updateHouse: (req, res) => {
    let { id } = req.params;
    let { type } = req.body;
    let index = houses.findIndex((elem) => elem.id === +id);

    if (type === "plus") {
      houses[index].price += 10000;
      res.status(200).send(houses);
    } else if (type === "minus") {
      houses[index].price -= 10000;
      res.status(200).send(houses);
    }
  },
};

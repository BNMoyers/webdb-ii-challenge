//imports and dependencies
const express = require("express");
const db = require("./data/dbConfig");
const router = express.Router();

//REQUESTS

//create
router
.post("/add-car", (req, res) => {
  const newCar = req.body;
  db("cars")
    
    .insert(newCar, "id")
    .then(carID => {
      res.status(200).json(carID);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

//read

router.get("/", (req, res) => {
  db("cars")
    .then(cars => {
      res.status(200).json(cars);
    })
    .catch(err => {
      res.status(500).json(cars);
    });
});

router.get("/:id", (req, res) => {
  db("cars")
    .select()
    .from("cars")
    .where({ id: req.params.id })
    .first()
    .then(car => {
      car
        ? res.status(200).json(car)
        : res.status(404).json({ errorMessage: "Car not Found" });
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
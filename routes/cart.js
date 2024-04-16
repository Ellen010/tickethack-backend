var express = require("express");
var router = express.Router();
const Cart = require("../models/carts");

/* GET all travels */
router.get("/allCart", function (req, res, next) {
  
  Cart.find({ })
  .then((travels) => {
    if (travels) { // On retourne les infos des trajets
        res.json({result: true, travels: travels});
    } else { // Le trajet n'existe pas
        res.json({result: false});
    }
  })
});

/* Post a travel */
router.post("/addToCart", function (req, res, next) {
  
    const {travelInfo} = req.body;

    const newTrip = new Cart({
        travelInfo
    });

    newTrip.save().then((trip) => {
        res.json({result: true, tripCart: trip})
    });

  });

/* Delete cart */
router.delete("/deleteTrip/:id", function (req, res, next) {
  
    Cart.deleteOne({travelInfo: req.params.id})
    .then(() => {
        res.json({result: true})
    });

  });

module.exports = router;

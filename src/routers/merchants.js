const express = require("express");
const router = new express.Router();
const Merchants = require("../models/merchants");

//create new merchant
router.post("/merchant", async(req,res) => {
    console.log(req.body);
    try {
        const merchants = new Merchants(req.body);
        const createMerchant = await merchants.save();
        res.status(200).send(createMerchant);
    } catch (e) {
        res.status(400).send(e);
    }
});

//get all merchants
router.get("/merchant", async(req,res) => {
    try {
        const merchantsData = await Merchants.find();
        res.send(merchantsData);
    } catch (e) {
        res.status(400).send(e);
    }
})

//get merchnats details
router.get("/merchant/:id", async(req,res) => {
    try {
        const _id = req.params.id;
        const merchantDetails = await Merchants.findById(_id);
        if (!merchantDetails) {
            return res.status(404).send();
        } else {
            res.send(merchantDetails);
        }
    } catch (e) {
        res.status(400).send(e);
    }
})

//update merchant
router.patch("/merchant/:id", async(req,res) => {
    try {
        const _id = req.params.id;
        const updateMerchant = await Merchants.findByIdAndUpdate(_id, req.body, {new:true});
        res.send(updateMerchant);
    } catch (e) {
        res.status(400).send(e);
    }
})

//delete merchant
router.delete("/merchant/:id", async(req,res) => {
    try {
        const _id = req.params.id;
        const deleteMerchants = await Merchants.findByIdAndDelete(_id);
        if (!_id) {
            res.status(404).send(e);
        }
        res.send(deleteMerchants);
    } catch (e) {
        res.status(400).send(e);
    }
})

module.exports = router;
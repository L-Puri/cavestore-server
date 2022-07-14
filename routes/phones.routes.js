const Phones = require('../models/Phones.model')
// const router = require('./index.routes')
const router = require('express').Router()
const express = require("express")

//Get the phones

router.get('/phones', async (req, res, next) => {
    const phones = await Phones.find()
    res.json(phones)
})


router.get('/phones/:id', async (req, res, next) => {
    const { id } = req.params
    const phones = await Phones.findById(id)
    res.json(phones)
})


module.exports = router
const express = require('express');

const mongoose = require('mongoose');
const models = require('../models/all-models');

// all function export for othe module.
module.exports = {
    createUser:createUser
}

/**
 * Name:createUser
 * Desc: This function help to register user
 */
async function createUser(req,res){
    try{
        const insertResponse = await models.Users.create(req.body); 
        
    }catch(error){
        res.send(error);
    }
}
// ------------------------------
// Import Packages
// ------------------------------
const express = require('express');
const router = express.Router();

const { PrismaClient } = require('@prisma/client'); // ✅ standaard pad
const prisma = new PrismaClient();


// ------------------------------
// [Get] passengers
// return array of passengers for a trip
// ------------------------------

// ------------------------------
// [Put] passengers 
// update status
// return 
// ------------------------------

// ------------------------------
// [Delete] trip
// cancel booking
// return boolean (true or false)
//-------------------------------


module.exports = router;
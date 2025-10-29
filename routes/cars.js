// ------------------------------
// Import Packages
// ------------------------------
const express = require('express');
const router = express.Router();

const { PrismaClient } = require('@prisma/client'); // ✅ standaard pad
const prisma = new PrismaClient();



// ------------------------------
// [Get] cars
// return array of cars
// ------------------------------

// ------------------------------
// [Post] cars
// return id  (id kan ook 0 zijn -> niet gelukt)
// ------------------------------

// ------------------------------
// [Put] cars
// return 
// ------------------------------

// ------------------------------
// [Delete] cars
// return boolean (true or false)
//

module.exports = router;
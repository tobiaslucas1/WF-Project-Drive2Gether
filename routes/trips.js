// ------------------------------
// Import Packages
// ------------------------------
const express = require('express');
const router = express.Router();

const { PrismaClient } = require('@prisma/client'); // ✅ standaard pad
const prisma = new PrismaClient();

// ------------------------------
// [Get] trips
// return array of trips
// ------------------------------

// ------------------------------
// [Post] trips
// return id  (id kan ook 0 zijn -> niet gelukt)
// ------------------------------

// ------------------------------
// [Put] trips 
// return 
// ------------------------------

// ------------------------------
// [Delete] trips
// return boolean (true or false)
//-------------------------------

module.exports = router;
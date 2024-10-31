// db.js

const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    // Replace <db_password> with your actual password or load it from an environment variable
    const conn = await mongoose.connect("mongodb://localhost:27017/demo");

    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;

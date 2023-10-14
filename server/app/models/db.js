require("dotenv").config();
const mysql = require("mysql");

// Create a connection to the database
const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DB,
});

// Open the MySQL connection
connection.connect((error) => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

module.exports = connection;

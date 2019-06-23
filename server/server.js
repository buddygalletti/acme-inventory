const Sequelize = require('sequelize');
const express = require('express');
const path = require('path');
const morgan = require('morgan');

const db = new Sequelize(`postgres://localhost:5432/acme_inventory`, {
  logging: false // so we don't see all the SQL queries getting made
});

const app = express();

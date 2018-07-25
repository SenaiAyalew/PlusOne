const express = require('express');
const { urlencoded, json } = require('body-parser');
const { join } = require('path');

const app = express();

app.use(urlencoded({ extended: false }));

app.use(json());

// Harvey's middleware
app.use((req, res, next) => {
  console.log(`${req.method}: ${req.path}`);
  next();
});

app.use(express.static(join(__dirname, '../dist/mean-angular6')));

const port = process.env.PORT || 3456;

app.listen(port, () => console.log(`listening on port ${port}.`));

module.exports = app;

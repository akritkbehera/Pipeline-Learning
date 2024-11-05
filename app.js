const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello from Jenkins Pipeline!');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

module.exports = app;

// test.js
const assert = require('assert');
const app = require('./app');

describe('Simple Test', () => {
  it('should return true', () => {
    assert.strictEqual(true, true);
  });
});

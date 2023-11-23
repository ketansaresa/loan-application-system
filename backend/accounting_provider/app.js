const express = require('express');
const app = express();
const port = 3001;
const providerJson = require('./data/providers.json');
const balanceSheetJson = require('./data/balanceSheet.json');

/* List of providers route */
app.get('/api/providers', (req, res) => {
  res.json(providerJson);
});

/* Balance sheet route */
app.get('/api/balanceSheet/:providerId', (req, res) => {
  try {
    /* Find balance sheet based on provider */
    const targetSheet = balanceSheetJson.find(o => o.providerId == req.params.providerId);
    if (targetSheet) {
      res.json(targetSheet.balanceSheet);
    } else {
      /* Default to first balancesheet */
      res.json(balanceSheetJson[0].balanceSheet);
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.listen(port, () => {
  console.log(`Accountung Provider listening on port ${port}`);
});
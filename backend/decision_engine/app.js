const express = require('express');
const app = express();
const bodyParser  = require('body-parser');
const port = 3002;

// Use middleware to parse JSON requests
app.use(bodyParser.json());

app.post('/api/makeDecision', (req, res) => {
  try {
    const { businessName, preAssessment, amountRequested, profitLossSummary } = req.body;
    const resData = {
      approved: false,
      amount: 0,
      preAssessment,
      profitLossSummary,
      businessName
    };
    /* Check preAssessment */
    if (preAssessment == 100) {
      /* Asset value is higher */
      resData.approved = true;
      resData.amount = amountRequested;
    } else {
      if (profitLossSummary > 0) {
        /* Profit noted */
        resData.approved = true;
        resData.amount = (amountRequested * preAssessment) / 100;
      } else {
        /* Loss noted, so can't approve */
      }
    }
    res.json(resData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.listen(port, () => {
  console.log(`Decision Engine listening on port ${port}`);
});
import { create } from './../services/application.service.js';
import { getDecision } from '../services/decision.engine.js';

function calculateProfitOrLoss(data) {
  // Create a copy of the data to avoid modifying the original
  const copiedData = [...data];
  const total = copiedData.reduce((acc, month) => acc + month.profitOrLoss, 0);

  return total;
}

function calculateAvgAssetValue(data) {
  /* Avg asset value is first and last month of asset value divided by 2 */
  const firstMonthValue = data[0].assetsValue;
  const lastMonthValue = data[data.length - 1].assetsValue;
  return (firstMonthValue + lastMonthValue) / 2;
}

// Submit application
const submitApplication = async (req, res) => {
  try {
    const { firstName, lastName, email, businessName, taxId, yearEstablished, purpose, amountRequested, balanceSheet } = req.body;
    let preAssessment = 20; // Default assessment value

    /* Calc profit loss and avg asset value (Assuming that we will recieve the last 12 months data) */
    const profitOrLoss = calculateProfitOrLoss(balanceSheet);
    const avgAssetValue = calculateAvgAssetValue(balanceSheet);

    if (profitOrLoss > 0) {
      /* Profit is noted */
      preAssessment = 60;
    }

    if (avgAssetValue > amountRequested) {
      /* Avg asset value is higher than loan amount */
      preAssessment = 100;
    }

    /* Send data to decision engine */
    const finalDecision = await getDecision({
      businessName,
      yearEstablished,
      amountRequested,
      preAssessment,
      profitLossSummary: profitOrLoss
    });

    /* Update application */
    await create({
      firstName, lastName, email,
      businessName, taxId,
      yearEstablished, purpose, amountRequested, preAssessment,
      isApproved: finalDecision?.data?.approved,
      amountApproved: finalDecision?.data?.amount
    });

    res.json(finalDecision.data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export {
  submitApplication
};

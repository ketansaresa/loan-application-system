import { providers, balanceSheetByProvider } from './../services/accountingProvider.service.js';

const getAccountingProviders = async (req, res) => {
  try {
    /* Get Providers from accounting service */
    const response = await providers();
    const list = response.data;
    res.json(list);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getBalanceSheet = async (req, res) => {
  try {
    const { providerId } = req.params;

    /* Get balance sheet based on selected provider */
    const response = await balanceSheetByProvider(providerId);
    const balanceSheet = response.data;
    res.json(balanceSheet);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

export {
  getAccountingProviders,
  getBalanceSheet
};

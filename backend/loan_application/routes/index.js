import express from 'express';
const router = express.Router();
import { submitApplication } from './../controllers/application.controller.js';
import { validateApplication } from './../middlewares/validators.js';
import { getAccountingProviders, getBalanceSheet } from './../controllers/accountingProvider.controller.js';

/* List of routes */

/* Submit application */
router.post('/application/submit', validateApplication, submitApplication);

/* Get list of accounting providers */
router.get('/accounting/providers', getAccountingProviders);

/* Fetch balance sheet */
router.get('/accounting/balanceSheet/:providerId', getBalanceSheet);

export default router;

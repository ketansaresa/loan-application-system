import axios from 'axios';
const serviceUrl = process.env.ACCOUNTING_PROVIDER_URL;

const providers = async() => {
  return axios.get(`${serviceUrl}/api/providers`);
};

const balanceSheetByProvider = async(providerId) => {
  return axios.get(`${serviceUrl}/api/balanceSheet/${providerId}`);
}

export {
  providers,
  balanceSheetByProvider
}
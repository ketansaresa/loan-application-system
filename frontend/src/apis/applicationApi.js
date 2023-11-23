export const ApplicationApi = {
  getProviders: async function () {
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_API_URL}/accounting/providers`
    );

    if (!response.ok) {
      return Promise.reject(new Error('Network response was not ok'));
    }

    return response.json();
  },
  getBalanceSheet: async function (providerId) {
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_API_URL}/accounting/balanceSheet/${providerId}`
    );

    if (!response.ok) {
      return Promise.reject(new Error('Network response was not ok'));
    }

    return response.json();
  },
  submit: async function (formData) {
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_API_URL}/application/submit`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      }
    );

    if (!response.ok) {
      return Promise.reject(new Error('Network response was not ok'));
    }

    return response.json();
  }
};
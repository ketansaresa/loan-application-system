import React, { useState, useEffect } from 'react'
import { ApplicationApi } from '../apis/applicationApi';
import DataModal from './dataModal';

function AccountingProvider({ formData, setFormData, step, setStep }) {
  const [providers, setProviders] = useState([]);
  const [selectedProvider, setSelectedProvider] = useState('');
  const [balanceSheet, setBalanceSheet] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Create a function to fetch the data
    const fetchData = async () => {
      try {
        const providers = await ApplicationApi.getProviders();
        setProviders(providers);
      } catch (error) {
        alert('Error while fetching accounting providers !!');
        console.log('Error:', error);
      }
    };
    fetchData();
  }, []);

  // Event handler to update the selected provider
  const handleProviderChange = (e) => {
    setBalanceSheet([]);
    setSelectedProvider(e.target.value);
  };

  async function submitApplication(event) {
    event.preventDefault();

    const payload = { ...formData, balanceSheet };
    /* Make submit API call */
    try {
      const applicationResult = await ApplicationApi.submit(payload);
      if (applicationResult?.approved) {
        alert(`Contratulations ${applicationResult.businessName}, your application has been approved and you will get ${applicationResult.preAssessment}% of your requested amount which is ${applicationResult.amount}. Your profit loss summary is ${applicationResult.profitLossSummary}`);
      } else {
        alert(`Sorry, your business made loss of ${applicationResult.profitLossSummary}. So we can not approve your request !`);
      }
      /* Reset Form and Send user to first page */
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        businessName: '',
        taxId: '',
        yearEstablished: '',
        amountRequested: '',
        purpose: ''
      });
      setStep(0);
    } catch (error) {
      alert('Error while submitting application !!');
      console.log('Error:', error);
    }
  }

  async function getBalanceSheet() {
    try {
      const balanceSheet = await ApplicationApi.getBalanceSheet(selectedProvider);
      setBalanceSheet(balanceSheet);
      openModal()
    } catch (error) {
      alert('Error while fetching balance sheet !!');
      console.log('Error:', error);
    }
  }

  // Function to open the modal and set the data
  const openModal = (data) => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <form onSubmit={submitApplication}>
      <div className='box-container' >
        <select required value={selectedProvider} onChange={handleProviderChange}>
          <option value="">Select Provider</option>
          {providers.map((provider) => (
            <option key={provider._id} value={provider._id}>
              {provider.name}
            </option>
          ))}
        </select>
        <button
          type='button'
          onClick={getBalanceSheet}
          disabled={selectedProvider == ''}
          style={{ 'width': '350px' }}
        >
          Request Balance Sheet
        </button>
      </div>
      <DataModal isOpen={isModalOpen} closeModal={closeModal} data={balanceSheet} />
      <button type='button' onClick={() => { setStep(step - 1); }}>Prev</button>
      <button disabled={!balanceSheet.length} type='submit'>Submit</button>
    </form>
  )
}

export default AccountingProvider
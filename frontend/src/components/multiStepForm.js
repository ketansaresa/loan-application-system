import React, { useState } from 'react'
import PersonalInfo from './personalInfo';
import BusinessInfo from './businessInfo';
import AccountingProvider from './accountingProvider';

function MultiStepForm() {
  const [step, setStep] = useState(0);
  const formTitles = ['Personal Information', 'Business Information', 'Accounting Provider'];
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    businessName: '',
    taxId: '',
    yearEstablished: '',
    amountRequested: '',
    purpose: ''
  });

  const stepDisplay = () => {
    switch (step) {
      case 0:
        return <PersonalInfo formData={formData} setFormData={setFormData} step={step} setStep={setStep} />
      case 1:
        return <BusinessInfo formData={formData} setFormData={setFormData} step={step} setStep={setStep} />
      case 2:
        return <AccountingProvider formData={formData} setFormData={setFormData} step={step} setStep={setStep} />
    }
  };

  return (
    <div className='form'>
      <div className='form-container'>
        <div className='header'>
          <h1>{formTitles[step]}</h1>
        </div>
        <div className='body'>
          {stepDisplay()}
        </div>
      </div>
    </div>
  )
}

export default MultiStepForm
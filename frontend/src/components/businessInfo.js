import React from 'react'

function businessInfo({ formData, setFormData, step, setStep }) {
  function validateForm(event) {
    event.preventDefault();
    setStep(step + 1);
  }

  return (
    <form onSubmit={validateForm}>
      <div className='box-container' >
        <input
          required
          type='text'
          placeholder='Business name'
          value={formData.businessName}
          onChange={(event) =>
            setFormData({ ...formData, businessName: event.target.value })
          }
        />
        <input
          required
          type='number'
          placeholder='Tax Id'
          value={formData.taxId}
          onChange={(event) =>
            setFormData({ ...formData, taxId: event.target.value })
          }
        />
        <input
          required
          type='number'
          min={1900}
          max={2023}
          placeholder='Year Established'
          value={formData.yearEstablished}
          onChange={(event) =>
            setFormData({ ...formData, yearEstablished: event.target.value })
          }
        />
        <input
          required
          type='number'
          placeholder='Loan Amount'
          value={formData.amountRequested}
          onChange={(event) =>
            setFormData({ ...formData, amountRequested: event.target.value })
          }
        />
        <input
          type='text'
          placeholder='Loan Purpose'
          value={formData.purpose}
          onChange={(event) =>
            setFormData({ ...formData, purpose: event.target.value })
          }
        />

      </div>
      <button type='button' onClick={() => { setStep(step - 1); }}>Prev</button>
      <button type='submit'>Next</button>
    </form>
  )
}

export default businessInfo
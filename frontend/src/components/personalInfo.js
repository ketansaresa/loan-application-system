import React from 'react'

function personalInfo({ formData, setFormData, step, setStep }) {
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
          placeholder='First name'
          value={formData.firstName}
          onChange={(event) =>
            setFormData({ ...formData, firstName: event.target.value })
          }
        />
        <input
          required
          type='text'
          placeholder='Last name'
          value={formData.lastName}
          onChange={(event) =>
            setFormData({ ...formData, lastName: event.target.value })
          }
        />
        <input
          required
          type='email'
          placeholder='Email'
          value={formData.email}
          onChange={(event) =>
            setFormData({ ...formData, email: event.target.value })
          }
        />
      </div>
      <button type='submit'>Next</button>
    </form>
  )
}

export default personalInfo
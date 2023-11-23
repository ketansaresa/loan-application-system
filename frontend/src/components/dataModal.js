import React from 'react';
import Modal from 'react-modal';

const DataModal = ({ isOpen, closeModal, data }) => {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      padding : '2%'
    },
  };

  return (
    <Modal
      ariaHideApp={false}
      style={customStyles}
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Balance Sheet"
    >
      
      <table>
        <thead>
          <tr>
            <th>Year</th>
            <th>Month</th>
            <th>Profit Loss</th>
            <th>Asset Value</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.year}</td>
              <td>{item.month}</td>
              <td>{item.profitOrLoss}</td>
              <td>{item.assetsValue}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <br/>
      <br/>
      <button onClick={closeModal}>Okay</button>
    </Modal>
  );
};

export default DataModal;

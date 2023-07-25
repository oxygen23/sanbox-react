import React, { useState } from "react";

const AddressForm = () => {
  const [addressInputs, setAddressInputs] = useState([{ address: "" }]);

  const addAddressInput = () => {
    const newAddressInputs = [...addressInputs, { address: "" }];
    setAddressInputs(newAddressInputs);
  };

  const handleAddressChange = (index, e) => {
    const newAddressInputs = [...addressInputs];
    newAddressInputs[index].address = e.target.value;
    setAddressInputs(newAddressInputs);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(addressInputs);
  };

  const handleEdit = (index) => {
    const newAddressInputs = [...addressInputs];
    const editedInput = newAddressInputs.splice(index, 1)[0];
    newAddressInputs.unshift(editedInput);
    setAddressInputs(newAddressInputs);
  };

  return (
    <form onSubmit={handleSubmit}>
      {addressInputs.map((addressInput, index) => (
        <div key={index}>
          <label>{`Address ${index + 1}`}</label>
          <input
            type="text"
            value={addressInput.address}
            onChange={(e) => handleAddressChange(index, e)}
          />
          <button type="button" onClick={() => handleEdit(index)}>
            Edit
          </button>
        </div>
      ))}
      <button type="button" onClick={addAddressInput}>
        Add Address
      </button>
      <button type="submit">Save Addresses</button>
    </form>
  );
};

export default AddressForm;

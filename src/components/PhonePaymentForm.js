// PhonePaymentForm.js

import React, { useState } from 'react';

function PhonePaymentForm({ onPaymentComplete }) {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onPaymentComplete();
  };
  
  return (
    <div>
    <h3 className="phone-input-text">이름과 전화번호를 입력해주세요!</h3>
    <form className="phone-payment-form" onSubmit={handleSubmit}>
        <label>
          이름:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          전화번호:
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </label>
        <button type="submit">결제</button>
    </form>
  </div>
  );
}

export default PhonePaymentForm;

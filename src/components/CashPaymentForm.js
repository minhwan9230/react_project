// CashPaymentForm.js

import React from 'react';
import '../css/PaymentMethod.css';

function CashPaymentForm({ onPaymentComplete }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onPaymentComplete();
  };

  return (
    <>
    <div>
      <h2 className="cash-instruction">현금을 넣어주세요!</h2>
        <img src="/assets/images/payment/현금삽입.jpg" alt="현금 삽입 이미지" className="cash-image" />
      </div>
    <form className="cash-payment-form" onSubmit={handleSubmit}>
      <div>
        <button type="submit">완료</button>
      </div>
    </form>
  </>
  );
}

export default CashPaymentForm;

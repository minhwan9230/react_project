// CardPaymentForm.js

import React from 'react';

function CardPaymentForm({ onPaymentComplete }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onPaymentComplete();
  };

  return (
    <>
      <div>
        <h2 className="card-instruction">카드를 넣어주세요!</h2>
        <img src="/assets/images/payment/카드삽입.jpg" alt="카드 삽입 이미지" className="cash-image" /> 
      </div>
    <form className="card-payment-form" onSubmit={handleSubmit}>
      <div>
        <button type="submit">완료</button>
      </div>
    </form>
  </>
  );
}

export default CardPaymentForm;

// PaymentOptions.js

import React from 'react'

function PaymentOptions({ onPhonePayment, onCashPayment, onCardPayment, onSimplePayment }) {
  return (
    <div className="payment-options">
      <button className="payment-option" onClick={onPhonePayment}>
        <img src="/assets/images/payment/핸드폰결제.jpg" alt="Phone" className="payment-icon" /><span>핸드폰</span>
      </button>
      <button className="payment-option" onClick={onCashPayment}>
        <img src="/assets/images/payment/현금결제.jpg" alt="Cash" className="payment-icon" /><span>현금</span>
      </button>
      <button className="payment-option" onClick={onCardPayment}>
        <img src="/assets/images/payment/카드결제.jpg" alt="Card" className="payment-icon" /><span>카드</span>
      </button>
      <button className="payment-option" onClick={onSimplePayment}>
        <img src="/assets/images/payment/간편결제.jpg" alt="Simple Pay" className="payment-icon" /><span>간편결제</span>
      </button>
    </div>
  );
}

export default PaymentOptions;

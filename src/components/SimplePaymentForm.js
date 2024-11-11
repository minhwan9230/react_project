// SimplePaymentForm.js

import React from 'react';


function SimplePaymentForm({ onPaymentComplete }) {
  const handleSubmit = (e) => {
    e.preventDefault(); 
    onPaymentComplete();
  };

  const handlePaymentOption = (paymentMethod) => { 
    console.log(`${paymentMethod} 선택됨`); 
    onPaymentComplete();
  }

  return (
		<form className="simple-payment-form" onSubmit={handleSubmit}>
		<h2 className="simple-instruction">해당되는 다음 간편결제를 진행해주세요!</h2>
		<div className="simple-payment-images"> 
		<button type="button" onClick={() => handlePaymentOption('네이버페이')}>
			<img src="/assets/images/payment/네이버페이.jpg" alt="네이버페이 로고" className="simple-payment-image" /> 
		</button>
		<button type="button" onClick={() => handlePaymentOption('애플페이')}>
			<img src="/assets/images/payment/애플페이.jpg" alt="애플페이 로고" className="simple-payment-image" /> 
		</button>
		<button type="button" onClick={() => handlePaymentOption('카카오페이')}>
			<img src="/assets/images/payment/카카오페이.jpg" alt="카카오페이 로고" className="simple-payment-image" /> 
		</button>
		<button type="button" onClick={() => handlePaymentOption('토스페이')}>
			<img src="/assets/images/payment/토스페이.jpg" alt="토스페이 로고" className="simple-payment-image" />
		</button>
		</div>
	</form>
  );
}

export default SimplePaymentForm;

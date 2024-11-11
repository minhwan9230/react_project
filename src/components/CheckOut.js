import React, { useState } from 'react';
import '../css/PaymentMethod.css';
import PaymentOptions from './PaymentOptions';
import PhonePaymentForm from './PhonePaymentForm';
import CashPaymentForm from './CashPaymentForm';
import CardPaymentForm from './CardPaymentForm';
import SimplePaymentForm from './SimplePaymentForm';

function CheckOut() {
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [isPaymentComplete, setIsPaymentComplete] = useState(false);
  
  const handlePhonePayment = () => {
    setPaymentMethod('phone');
  };

  const handleCashPayment = () => {
    setPaymentMethod('cash');
  };

  const handleCardPayment = () => {
    setPaymentMethod('card');
  };

  const handleSimplePayment = () => {
    setPaymentMethod('simple');
  };

  const handlePaymentComplete = () => {
    setPaymentMethod(null);
    setIsPaymentComplete(true);
  };

  const handleGoToMainMenu = () => {
    window.location.href = "/"; // 메인메뉴로 돌아가기 로직
  }
  
  return (
    <div className="payment-screen">
      {/* 결제 수단이 선택되지 않았을 때만 메시지 표시 */}
      {!isPaymentComplete && !paymentMethod && (
        <h3>결제 수단을 선택해주세요</h3>
      )}
      {!paymentMethod && !isPaymentComplete && (
        <PaymentOptions 
          onPhonePayment={handlePhonePayment} 
          onCashPayment={handleCashPayment} 
          onCardPayment={handleCardPayment}
          onSimplePayment={handleSimplePayment} 
        />       
      )}
      {paymentMethod === 'phone' && (
        <PhonePaymentForm onPaymentComplete={handlePaymentComplete} />
      )}
      {paymentMethod === 'cash' && (
        <CashPaymentForm onPaymentComplete={handlePaymentComplete} />
      )}
      {paymentMethod === 'card' && (
        <CardPaymentForm onPaymentComplete={handlePaymentComplete} />
      )}
      {paymentMethod === 'simple' && (
        <SimplePaymentForm onPaymentComplete={handlePaymentComplete} />
      )}
      {isPaymentComplete && (
        <div className="payment-complete">
          <h2 className="payment-complete-text">
            결제가 완료되었습니다!
          </h2>
          <h2 className="payment-complete-text">
            STEAM에서 구매해주셔서 감사드립니다!
          </h2>
          <div className="button-container">
            <button onClick={handleGoToMainMenu} className="go-to-main-menu-button"> 메인메뉴로 돌아가기 </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CheckOut;

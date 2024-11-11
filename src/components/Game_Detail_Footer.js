// src/components/Game_Detail_Footer.js
import React from 'react';
import '../css/Game_Detail_Footer.css'

const Footer = ({ addToCart, game, isInCart, navigate }) => {
  const handleButtonClick = () => {
    addToCart(game); // 장바구니에 게임 추가
    navigate('/'); // 홈으로 이동
  };

  return (
    <div className='btn'>
      <button
        onClick={handleButtonClick} // 하나의 핸들러로 결합
        disabled={isInCart}
        className="addbtn"
      >
        {isInCart ? '장바구니에 있음' : '장바구니에 추가'}
      </button>
      <button className='backbtn' onClick={() => navigate('/')}>홈으로 돌아가기</button> {/* navigate 사용 */}
    </div>
  );
};

export default Footer;

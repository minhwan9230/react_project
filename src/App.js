// src/App.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Card from './components/Card';
import Header from './components/Header';
import Footer from './components/Footer';
import Cart from './components/Cart';
import Game_Detail from './components/Game_Detail';
import Checkout from './components/CheckOut';
import gamesData from './gamesData';
import ScrollToTop from './components/ScrollToTop';
import { addToCart, removeFromCart } from './actions';
import './css/Cart.css';
import './App.css';

// CardList 컴포넌트 정의
const CardList = ({ category, addToCart }) => {
  const filteredGames = category ? gamesData.filter((game) => game.genre === category) : gamesData;

  return (
    <div>
      <h2 className='categoryGameName'>{category ? `${category} 게임 리스트` : '모든 게임 (49)'}</h2>
      <div className="d-steam-cards">
        {filteredGames.map((game, index) => (
          <Card 
            key={index}
            title={game.title}
            imageUrl={game.imageUrl}
            game={game}
            addToCart={addToCart} // addToCart를 각 Card 컴포넌트에 전달
          />
        ))}
      </div>
    </div>
  );
};

const App = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cartItems);
  const totalPrice = useSelector(state => state.totalPrice);

  return (
    <Router>
			<Header />
			<ScrollToTop/>
      <div className="main-container">
        <div className="content">
          <Routes>
            <Route path="/" element={
              <CardList addToCart={(game) => dispatch(addToCart(game))} /> // 모든 게임
            } />
            <Route path="/game/:id" element={
              <Game_Detail />
            } />
            <Route path="/checkout" element={<Checkout />} />
            {/* 카테고리별 경로 추가 */}
            <Route path="/action" element={<CardList category="액션" addToCart={(game) => dispatch(addToCart(game))} />} />
            <Route path="/fear" element={<CardList category="공포" addToCart={(game) => dispatch(addToCart(game))} />} />
            <Route path="/puzzle" element={<CardList category="퍼즐" addToCart={(game) => dispatch(addToCart(game))} />} />
            <Route path="/rpg" element={<CardList category="RPG" addToCart={(game) => dispatch(addToCart(game))} />} />
            <Route path="/sports" element={<CardList category="스포츠" addToCart={(game) => dispatch(addToCart(game))} />} />
            <Route path="/simulation" element={<CardList category="시뮬레이션" addToCart={(game) => dispatch(addToCart(game))} />} />
            <Route path="/fps" element={<CardList category="FPS" addToCart={(game) => dispatch(addToCart(game))} />} />
          </Routes>
        </div>
        {cartItems.length > 0 && (
          <div className="sidebar">
            <Cart cartItems={cartItems} totalPrice={totalPrice} removeFromCart={(gameId) => dispatch(removeFromCart(gameId))} />
          </div>
        )}
      </div>
      <Footer />
    </Router>
  );
};

export default App;

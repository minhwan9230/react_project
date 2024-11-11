// src/components/Game_Detail.js
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // useNavigate 임포트
import { useDispatch, useSelector } from 'react-redux';
import Slide from './Game_Detail_Slide';
import Footer from '../components/Game_Detail_Footer';
import gamesData from '../gamesData';
import '../css/Game_Detail.css';
import { addToCart } from '../actions';

const Game_Detail = () => {
  const { id } = useParams();
  const game = gamesData.find((g) => g.id === parseInt(id));
  const dispatch = useDispatch();
  const navigate = useNavigate(); // navigate 초기화
  const cartItems = useSelector(state => state.cartItems);
  
  if (!game) {
    return <h2>게임을 찾을 수 없습니다.</h2>;
  }

  const isInCart = cartItems.some(item => item.id === game.id);

  return (
    <div className="scroll">
      <div id="wrapper_header">
        <h1 id="game_title">{game.title}</h1>
      </div>
      <div>
        <Slide />
        <div id="wrapper">
          <pre className="game_description">{game.description}</pre>
          <h4 className="p_font">&nbsp;&nbsp;&nbsp;🏹 장르 : {game.genre}</h4>
          <h4 className="p_font">&nbsp;&nbsp;&nbsp;👍 평가 : {game.review}</h4>
          <h4 className="p_font">&nbsp;&nbsp;&nbsp;📆 출시일 : {game.release}</h4>
          <h4 className="p_font">&nbsp;&nbsp;&nbsp;🧑‍💻 개발사 : {game.developer}</h4>
          {/* <h2>시스템 요구 사항</h2> */}
          <hr />
          <div className="eval_option">
            {/* <p className="eval_p">종합평가:</p> */}
            {/* <h3 className="eval_h3">{game.review}</h3> */}
          </div>
          <Footer 
            addToCart={() => dispatch(addToCart(game))} 
            game={game} 
            isInCart={isInCart} 
            navigate={navigate}
          />
        </div>
      </div>
    </div>
  );
}

export default Game_Detail;
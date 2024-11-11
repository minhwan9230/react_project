// Game_Detail_Slide.js

import "../css/Game_Detail_Slide.css";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import gamesData from "../gamesData";

const Slide = () => {
  const { id } = useParams();
  const game = gamesData.find((g) => g.id === parseInt(id));
  const navigate = useNavigate();
	const trainCompartment = [
    // `${game.slideUrl1}`,
    `${game.slideUrl2}`,
    `${game.slideUrl3}`,
    `${game.slideUrl4}`,
    `${game.slideUrl5}`,
	];
	console.log(game.slideUrl1);

  const [curSlide, setCurSlide] = useState(0); // 이미지 슬라이드에서 표출되는 이미지 번호
  const [intervalId, setIntervalId] = useState(null);

  const FIRST_SLIDE_INDEX = 0; // 이미지 슬라이드의 시작 번호
  const LAST_SLIDE_INDEX = trainCompartment.length - 1; // 이미지 슬라이드의 끝 번호
  const MOVE_SLIDE_INDEX = 1; // 이미지 슬라이드 이동 값
  const autoMoveSlide = () => {
    if (intervalId !== null) {
      clearInterval(intervalId);
    }

    setIntervalId(
      setInterval(() => {
        setCurSlide((prevState) =>
          prevState < LAST_SLIDE_INDEX
            ? prevState + MOVE_SLIDE_INDEX
            : FIRST_SLIDE_INDEX
        );
      }, 5000)
    );
  };

  useEffect(() => {
    autoMoveSlide();

    return () => clearInterval(intervalId);
  }, []);

  const moveToSlide = (value) => {
    if (value === "next") {
      // 슬라이드 끝점에 도달했을 때 curSlide의 값을 바꿔 처음으로 돌아가게 한다.
      setCurSlide((prevState) =>
        prevState < LAST_SLIDE_INDEX
          ? prevState + MOVE_SLIDE_INDEX
          : FIRST_SLIDE_INDEX
      );
    }
    if (value === "prev") {
      // 슬라이드 시작점에 도달했을 때 curSlide의 값을 바꿔 마지막으로 돌아가게 한다.
      setCurSlide((prevState) =>
        prevState > FIRST_SLIDE_INDEX
          ? prevState - MOVE_SLIDE_INDEX
          : LAST_SLIDE_INDEX
      );
    }
  };
  const handlePaginationClick = (index) => {
    setCurSlide(index);
    autoMoveSlide(); // curSlide가 변경된 후 setInterval 대기 시간 초기화
  };

  return (
    <div className="train">
      <button className="prev-button" onClick={() => moveToSlide("prev")}>
        &#60;
      </button>
      <div className="show">
        {trainCompartment.map((item, index) => (
          <div
            className="compartment"
            key={index}
            style={{
              transform: `translateX(${-1296 * curSlide}px)`,
              backgroundImage: `url(${item})`,
              transition: "all 0.4s ease-in-out",
            }}
          >
            <img className="img_slide" src={item} />
          </div>
        ))}
      </div>
      <ol className="slide-index">
        {trainCompartment.map((_, index) => (
          <li
            key={index}
            className={`index-item ${curSlide === index ? "active" : ""}`}
            onClick={() => handlePaginationClick(index)}
          >
            {index + 1}
          </li>
        ))}
      </ol>
      <button className="next-button" onClick={() => moveToSlide("next")}>
        &#62;
      </button>
    </div>
  );
};

export default Slide;

import React from "react";

const Card = ({ username = "사용자", discount = 0 }) => {
  const cardClass = "card-wrap";
  return (
    /*
    <div className="card-wrap">
      <p> 반갑습니다. 사용자님🎀 </p>
      <button type="button">바로가기</button>
    </div>
    */

    // view
    <div className={cardClass}>
      <p> 반갑습니다. {username}님🎀🎀</p>
      {discount ? <p> 할인율 {discount}% </p> : ""}
      <button type="button">바로가기</button>
    </div>
  );
};

export default Card;

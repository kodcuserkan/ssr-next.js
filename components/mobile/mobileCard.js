import React, { useEffect } from "react";
const food = "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/9/6/FNM_100119-Avocado-Veggie-Rolls_s4x3.jpg.rend.hgtvcom.826.620.suffix/1567792791089.jpeg"
const MobileCard = ({deviceType}) => {

  console.log("mobile page deviceType", deviceType);

  const recipeAuthor = "Efecan";
  const recipeItem = {
    title: "Avokado Ezmeli Taco",
    date: "8 Haziran 2021, Salı",
    image: food,
    description: "Bu kremsi ve baharatlı avokado sosu, günlük taco'larınızı hazırlamak için harika seçeneklerden biri. Geleneksel olarak flautas veya taquitos ile servis edilir, ancak bazı vegan enchiladalara da harika bir katkı sağlar.",
  };

  const like = 193;
  const isLiked = true;
  const props = {
    author: recipeAuthor,
    title: recipeItem.title,
    date: recipeItem.date,
    description: recipeItem.description,
    liked: isLiked,
    likeCount: like,
  };

  return (
    <div className="mobile-card">
      <div className="card">
        <div className="card-header">
          <div className="profile">
            <span className="letter">{props.author[0]}</span>
          </div>
          <div className="card-title-group">
            <h5 className="card-title">{props.title}</h5>
            <div className="card-date">{props.date}</div>
          </div>
        </div>
        <img className="card-image" src={food} alt="Logo" />
        <div className="card-text">{props.description}</div>
        <div className="card-like-bar">
          {props.liked ? (
            <img className="card-like-icon" src={food} alt="Logo" />
          ) : (
            <img className="card-like-icon" src={heartOutline} alt="Logo" />
          )}
          <div className="like-text">
            <b>{props.likeCount}</b> kişi bu tarifi beğendi.
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileCard;

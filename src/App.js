import React, { useState } from 'react';
import Rating from 'react-rating-stars-component';
import burgerImage from './assets/img/burger.png';
import cafe1Image from './assets/img/cafe1.jpg';
import cafe2Image from './assets/img/cafe2.jpg';
import profileImage from './assets/img/profile.png';
import './App.css';

const App = () => {
  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);

  const burgerOpen = () => {
    setBurgerMenuOpen(true);
  };

  const burgerClose = () => {
    setBurgerMenuOpen(false);
  };

  return (
      <div>
        <div className="openzone">
          <div className="openzone__block">
            <div className="openzone__block-element">
              <div className="openzone__block-element--item--img">
                <img src={cafe2Image} alt="" />
              </div>
              <div className="openzone__block-element--item">НАЗВАНИЕ</div>
              <div className="openzone__block-element--rating">
                <Rating
                    count={5}
                    value={4}
                    size={30}
                    activeColor="#ffd700"
                    isHalf={true}
                    edit={false}
                />
              </div>
              <div className="openzone__block-element-item">Рейтинг 4/5</div>
              <div className="openzone__block-element-item">Адрес: ул.Пенсил, д.20</div>
            </div>
            <div className="open__block-element--text">ОТЗЫВЫ</div>
            <div className="openzone__block-element--feed">
              <div className="openzone__block-element--feedback">
                <div className="feedback__block"></div>
              </div>
            </div>
          </div>
        </div>

        <header className="header">
          <div className="header__block">
            <div className="header__img" onClick={burgerOpen}><img src={burgerImage} alt="" /></div>
            <div className="header__search"><input type="search" placeholder="Искомое заведение" /></div>
          </div>
        </header>

        <div className={`burger__menu ${burgerMenuOpen ? 'burger-menu-open' : ''}`}>
          <div className="burger__menu-header">
            <div className="burger__menu-header--profile">
              <div className="profile__photo"><img src={profileImage} alt="" /></div>
              <div className="profile__name">Константин</div>
            </div>
            <div className="burger__menu-header--close" onClick={burgerClose}>X</div>
          </div>

          <div className="burger__menu-block">
            <div className="burger__menu-block--element">
              <img src={cafe1Image} alt="" />
              <div className="burger__menu-name">Рестораны</div>
            </div>
            <div className="burger__menu-block--element">
              <img src={cafe1Image} alt="" />
              <div className="burger__menu-name">Кафе</div>
            </div>
            <div className="burger__menu-block--element">
              <img src={cafe1Image} alt="" />
              <div className="burger__menu-name">Бары</div>
            </div>
            <div className="burger__menu-block--element">
              <img src={cafe1Image} alt="" />
              <div className="burger__menu-name">Отели</div>
            </div>
            <div className="burger__menu-block--element">
              <img src={cafe1Image} alt="" />
              <div className="burger__menu-name">Фаст-Фуды</div>
            </div>
          </div>
        </div>

        <main className="main">
          <div className="title">Название Категории</div>
          <div className="main__zone">
            <div className="main__zone-img"><img src={cafe1Image} alt="" /></div>
            <div className="main__zone-name">Name Zone</div>
            <div className="main__zone-rating">Рейтинг <br />4,5</div>
          </div>
          {/* ... more main zone elements ... */}
        </main>

        <script src="assets/script.js"></script>
      </div>
  );
};

export default App;

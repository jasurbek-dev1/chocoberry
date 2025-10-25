import React, { useState } from "react";
import "./Menu.css";
import logo from "../assets/logo.jpg";

// Rasmlarni import qilamiz
import cake1 from "../assets/cake1.jpg";
import cake2 from "../assets/cake2.jpg";
import cake3 from "../assets/cae3.jpg";
import cake4 from "../assets/cake4.jpg";
import cake5 from "../assets/cake5.jpg";



const Menu = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Shirinliklar ro'yxati
  const items = [
    {
      id: 1,
      name: "Price",
      desc: "25 cm 20-22 dona shokoladli qulupnay (rezavorlar bilan bezatilgan)",
      price: "450 000 so'm",
      img: cake1, // import qilingan rasm
    },
    {
      id: 2,
      name: "Price",
      desc: "70/30 cm razmerli tort",
      price: "1 200 000 so'm",
      img: cake2, // import qilingan rasm
    },
    {
      id: 3,
      name: "Price",
      desc: "16ta shokoladli mini keklar to'plami",
      price: "225 000 so'm",
      img: cake3,
    },
    {
      id: 4,
      name: "Price",
      desc: "25 cm 20-22 dona shokoladli qulupnay (rezavorlar bilan bezatilgan)",
      price: "450 000 so'm",
      img: cake4,
    },
    {
      id: 5,
      name: "Price",
      desc: "25 cm 20-22 dona shokoladli qulupnay (rezavorlar bilan bezatilgan)",
      price: "450 000 so'm",
      img: cake5,
    },
      {
      id: 1,
      name: "Price",
      desc: "25 cm 20-22 dona shokoladli qulupnay (rezavorlar bilan bezatilgan)",
      price: "450 000 so'm",
      img: cake1, // import qilingan rasm
    },
    {
      id: 2,
      name: "Price",
      desc: "70/30 cm razmerli tort",
      price: "1 200 000 so'm",
      img: cake2, // import qilingan rasm
    },
    {
      id: 3,
      name: "Price",
      desc: "16ta shokoladli mini keklar to'plami",
      price: "225 000 so'm",
      img: cake3,
    },
    {
      id: 4,
      name: "Price",
      desc: "25 cm 20-22 dona shokoladli qulupnay (rezavorlar bilan bezatilgan)",
      price: "450 000 so'm",
      img: cake4,
    },
    {
      id: 5,
      name: "Price",
      desc: "25 cm 20-22 dona shokoladli qulupnay (rezavorlar bilan bezatilgan)",
      price: "450 000 so'm",
      img: cake5,
    },
   
  ];

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="menu-container">
      {/* Header */}
      <header className="menu-header">
        <img src={logo} alt="ChocoBerry Logo" className="menu-logo" />
        <h1 className="menu-title">ChocoBerry Namangan</h1>
      </header>

      {/* Qidiruv */}
      <div className="search-box">
        <input
          type="text"
          placeholder="Qidirish..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Menu */}
      <section className="menu-items">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <div key={item.id} className="menu-card">
              <img src={item.img} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.desc}</p>
              <span>{item.price}</span>
            </div>
          ))
        ) : (
          <p className="no-result">Hech narsa topilmadi 😔</p>
        )}
      </section>

      {/* Footer */}
      <footer className="menu-footer">
        <h3>Aloqa</h3>
        <p>
          📞 Telefon:{" "}
          <a href="tel:+998335523606" target="_blank" rel="noreferrer">
            +998 33 552 36 06
          </a>
        </p>
        <p>
          💬 Telegram:{" "}
          <a href="https://t.me/chocoberriest" target="_blank" rel="noreferrer">
            @chocoberriest
          </a>
        </p>
        <a
          href="https://www.google.com/maps/place/41%C2%B000'56.9%22N+71%C2%B033'49.3%22E"
          target="_blank"
          rel="noreferrer"
        >
          📍 Manzil
        </a>
      </footer>
    </div>
  );
};

export default Menu;

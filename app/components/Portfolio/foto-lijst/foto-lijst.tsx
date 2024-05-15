import "./foto-lijst.css";

export default function PortfolioLijst() {
  return (
    <div className="portfolio-lijst-container">
      <h2>Portfolio</h2>
      <ul className="portfolio-lijst">
        <li>
          <img src="https://www.w3schools.com/images/img_girl.jpg" alt="Parasol 1" />
        </li>
        <li>
          <img src="https://www.w3schools.com/images/img_girl.jpg" alt="Parasol 2" />
        </li>
        <li>
          <img src="https://www.w3schools.com/images/img_girl.jpg" alt="Parasol 3" />
        </li>
      </ul>
    </div>
  );
}

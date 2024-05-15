
import "./skills.css"; // Importeer CSS-stijlen

export default function Skills() {
  return (
    <div className="skills-container">
      <h2>Skills</h2>
      <div className="skills-list">
        <div className="skill">
          <i className="fas fa-pencil-alt"></i>
          <p>Illustraties maken</p>
        </div>
        <div className="skill">
          <i className="fas fa-palette"></i>
          <p>Kleurtheorie</p>
        </div>
        <div className="skill">
          <i className="fas fa-font"></i>
          <p>Typografie</p>
        </div>
        <div className="skill">
          <i className="fas fa-vector-square"></i>
          <p>Vectorafbeeldingen maken</p>
        </div>
        <div className="skill">
          <i className="fas fa-image"></i>
          <p>Beeldbewerking</p>
        </div>
        <div className="skill">
          <i className="fas fa-desktop"></i>
          <p>UI-ontwerp</p>
        </div>
        <div className="skill">
          <i className="fas fa-mobile-alt"></i>
          <p>UX-ontwerp</p>
        </div>
      </div>
    </div>
  );
}

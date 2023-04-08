import "../styles/main.scss";
import icon from "../../public/gold_cup.png";

const Header = () => {
  return (
    <header className="page-header">
      <h2>Web Developer</h2>
      <h1>Alfredo García</h1>
      <div>
        <button className="primary-button">
          <img src={icon} />
        </button>
        <button>Ver en Español</button>
      </div>
    </header>
  );
};

export default Header;

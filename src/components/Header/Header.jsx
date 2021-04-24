import logo from "./logo.svg";
import logo2 from "./logo2.svg";
import "./Header.css";

export default function header({langEN, langUK}) {
  return (
    <>
      <header className="header">
        <div className="brand-box">
          <img src={logo} className="cotaLogo" alt="Cota Logo" />
          <p className="header-text">
            <img src={logo2} className="rnboLogo" alt="Cota Logo" />
            National Security and Defense Council of Ukraine
          </p>
        </div>
        <div className="slogan-box">
          <p className="header-text">Coronavirus epidemic monitoring system</p>
        </div>
        <div className="language-box">
          <span className="header-lang">{langUK}</span>
          <span className="header-lang">{langEN}</span>
        </div>
      </header>
    </>
  );
}

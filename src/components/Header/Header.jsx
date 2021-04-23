import logo from "./logo.svg";
import logo2 from "./logo2.svg";

export default function header() {
  return (
    <>
      <header className="header">
        <div className="brandBox">
          <img src={logo} className="cotaLogo" alt="Cota Logo" />
          <p className="textName">
            <img src={logo2} className="rnboLogo" alt="Cota Logo" />
            National Security and Defense Council of Ukraine
          </p>
        </div>
        <div className="sloganBox">
          <p className="textName">Coronavirus epidemic monitoring system</p>
        </div>
        <div className="languageBox">
          <span className="textName">UK</span>
          <span className="textName">EN</span>
        </div>
      </header>
    </>
  );
}

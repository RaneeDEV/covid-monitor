import "./LocationBtn.css";
export default function LocationBtn({ text, currentLocation, changeLocation }) {
  const active = text.toLowerCase() === currentLocation;
  const classList = `btn ${active ? "active" : ""}`;
  return (
    <>
      <button className={classList} onClick={() => changeLocation()}>
        {text}
      </button>
    </>
  );
}

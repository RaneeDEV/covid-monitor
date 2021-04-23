import "./DataSumm.css";

export default function DataSumm({ title, summTitle, deltaSumm }) {
  return (
    <>
      <div className="data-summ-box">
        <h2 className="title-box">{title}</h2>
        <span className="title-summ">{summTitle}</span>
        <span className="delta-summ">{deltaSumm}</span>
      </div>
    </>
  );
}

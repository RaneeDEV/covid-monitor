import "./Search.css";

export default function Search() {
  return (
    <>
      <div className="search-wrap">
        <span className="search-icon common-search">
          <i className="fas fa-search"></i>
        </span>
        <input
          type="search"
          className="search-location common-search"
          placeholder="Search by region"
        />
      </div>
    </>
  );
}

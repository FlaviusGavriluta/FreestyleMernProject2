export const Menu = () => (
  <button
    className="btn btn-dark btn-menu"
    style={{ display: "flex", alignItems: "center", height: "30px" }}
  >
    <span
      id="boot-icon"
      className="bi bi-list"
      style={{ fontSize: "24px" }}
    ></span>
    <span className="fw-bold ms-1" style={{ fontSize: "1.5vh" }}>
      Menu
    </span>
  </button>
);

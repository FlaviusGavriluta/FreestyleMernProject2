export const Watchlist = (favorites) => (
    <div className="dropdown">
    <button
      className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                    aria-expanded="false"
      style={{ display: "flex", alignItems: "center", height: "35px" }}
    >
        <i className="bi bi-bookmark-plus-fill" style={{ fontSize: "4vh" }}></i>
      <span className="fw-bold ms-2" style={{ fontSize: "2.5vh" }}>
        Watchlist
      </span>
    </button>
       <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
        </div>


    // <div className="dropdown">
    //     <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
    //             aria-expanded="false">
    //         Dropdown button
    //     </button>
    //     <ul className="dropdown-menu">
    //         <li><a className="dropdown-item" href="#">Action</a></li>
    //         <li><a className="dropdown-item" href="#">Another action</a></li>
    //         <li><a className="dropdown-item" href="#">Something else here</a></li>
    //     </ul>
    // </div>
);
export const Watchlist = (favorites) => (
    <div className="dropdown">
        <button
            className="btn btn-dark dropdown-toggle" type="button" data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{display: "flex", alignItems: "center", height: "35px"}}
        >
            <i className="bi bi-bookmark-plus-fill" style={{fontSize: "2vh"}}></i>
            <span className="fw-bold ms-1" style={{fontSize: "1.5vh"}}>
        Watchlist
      </span>
        </button>
        <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>

        </ul>
    </div>


);
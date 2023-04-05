export const Login = () => (
  <div className="dropdown mx-4">
    <a
      className="dropdown-toggle d-flex align-items-center hidden-arrow"
      href="#"
      id="navbarDropdownMenuAvatar"
      role="button"
      data-mdb-toggle="dropdown"
      aria-expanded="false"
    >
      <img
        src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
        className="rounded-circle"
        height="25"
        alt="Black and White Portrait of a Man"
        loading="lazy"
      />
    </a>
    <ul
      className="dropdown-menu dropdown-menu-end"
      aria-labelledby="navbarDropdownMenuAvatar"
    >
      <li>
        <a className="dropdown-item" href="#">
          My profile
        </a>
      </li>
      <li>
        <a className="dropdown-item" href="#">
          Settings
        </a>
      </li>
      <li>
        <a className="dropdown-item" href="#">
          Logout
        </a>
      </li>
    </ul>
  </div>
);

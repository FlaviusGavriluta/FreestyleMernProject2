import { Search } from "./components/Search";
import { Menu } from "./components/Menu";
import { Home } from "./components/Home";
import { Watchlist } from "./components/Watchlist";
import { SignIn } from "./components/SignIn";

export const Navbar = ({ input, search, handleKeyPress }) => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-light-emphasis">
    <div className="container d-flex align-items-center">
      <Home />
      <Menu />
      <Search input={input} search={search} handleKeyPress={handleKeyPress} />
      <Watchlist />
      <SignIn />
    </div>
  </nav>
);

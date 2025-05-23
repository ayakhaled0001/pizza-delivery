import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder.jsx";
import UserName from "../features/user/UserName.jsx";

function Header() {
  return (
    <header className="bg-yellow-500 uppercase">
      <Link to="/" className="tracking-widest">
        Fast React Pizza Co.
      </Link>
      <SearchOrder />
      <UserName />
    </header>
  );
}

export default Header;

import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder.JSX";

function Header() {
  return (
    <header>
      <Link to="/">Fast React Pizza Co.</Link>
      <SearchOrder />
    </header>
  );
}

export default Header;

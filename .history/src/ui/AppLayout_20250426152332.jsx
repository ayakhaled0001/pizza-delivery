import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";

function AppLayout() {
  const navigation = useNavigation();
  return (
    <div>
      <Header />
      <main>
        <p>content</p>
        <Outlet />
      </main>
      <CartOverview />
    </div>
  );
}

export default AppLayout;

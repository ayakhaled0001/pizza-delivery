import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  console.log(navigation.state);
  return (
    <div className="grid h-[600px] bg-red-500 grid-row-3 grid-cols-2">
      {isLoading && <Loader />}
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

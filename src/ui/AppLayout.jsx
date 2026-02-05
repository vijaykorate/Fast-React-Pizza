import Header from "./Header";
import Loader from "./Loader";
import CartOverView from "../features/cart/CartOverView";
import { Outlet, useNavigation } from "react-router-dom";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div className="layout">
      {isLoading && <Loader />}

      <Header />

      <main>
        <Outlet />
      </main>

      <CartOverView />
    </div>
  );
}

export default AppLayout;

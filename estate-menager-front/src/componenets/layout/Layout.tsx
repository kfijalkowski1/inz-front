// import {useSession} from "../use-session.ts";
// import {UserContext} from "./login/UserContext.tsx";
import Header from "./Header.tsx";
import FlexOutlet from "./FlexOutlet.tsx";
import MyFooter from "./Footer.tsx";
import ScrollToTop from "./ScrollToTop.tsx";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function Layout() {
  // const userInfo = useSession(); // TODO add login and session
  return (
    <div className="min-h-screen flex flex-col">
      <ToastContainer/>
      {/*<UserContext.Provider value={userInfo}>*/}
        <ScrollToTop/>
        <Header/>
        <FlexOutlet/>
        <MyFooter/>
      {/*</UserContext.Provider>*/}
    </div>
  );
}

export default Layout;
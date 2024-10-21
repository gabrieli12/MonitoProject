import { Outlet, Link } from "react-router-dom";
import App from "../../App";
import SideMenu from "../sideMenu";


function Main() {
  return (
    <main>
        <Outlet />
        <SideMenu />
    </main>
  )
}

export default Main
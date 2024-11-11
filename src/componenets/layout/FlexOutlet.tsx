import {Outlet} from "react-router-dom";

function FlexOutlet() {
  return <main className="flex-grow bg-gray-50">
    <Outlet/>
  </main>;
}

export default FlexOutlet;
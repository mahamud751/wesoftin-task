import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="lg:m-8">
      <Outlet></Outlet>
    </div>
  );
};

export default Main;

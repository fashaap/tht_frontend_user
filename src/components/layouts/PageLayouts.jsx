import { Outlet } from "react-router-dom";


const PageLayouts = (props) => {
  return (
    <main className="absolute mt-10 md:mt-16 xl:mt-25 w-full flex flex-col items-center justify-center">
      {props.children}
    </main>
  );
};

export default PageLayouts;

import React from "react";
import Mynav from "./components/mynav/Mynav";
import Welcome from "./components/welcome/Welcome";
import AllTheBooks from "./components/books/AllTheBooks";
import MyFooter from "./components/myfooter/MyFooter";

const App = () => {
  return (
    <>
      <Mynav />
      <Welcome />
      <AllTheBooks />
      <MyFooter />
    </>
  );
};

export default App;

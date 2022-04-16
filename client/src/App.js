import React, { useEffect } from "react";
import Form from "./Form/Form";
import Header from "./header/Header";
import Items from "./Items/Items";
import './App.css';

const App = () => {

  return (
    <div>
      <Header />
      <div className="main">
        <div className="items">
          <Items />
        </div>
        <div className="form">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default App;

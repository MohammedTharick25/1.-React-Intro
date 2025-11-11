import React from "react";
import "./App.css";
// lodash utility package
import _ from "lodash";
// Import components
import Header from "./Header";
import Footer from "./Footer";
import { Greeting } from "./Greeting";
import Button from "./Button";

// Import utility
import { formatDate } from "../utils/formatDate";

function App() {
  const today = new Date();
  const cword = _.capitalize("hello");

  return (
    <div>
      <Header />
      <main>
        <Greeting name="React Developer" />
        <p>Today is {formatDate(today)}.</p>
      </main>
      <p>{cword}</p>
      <Button />
      <Footer />
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";
// lodash utility package
import _ from "lodash";
// Import components
import Header from "./Header";
import Footer from "./Footer";
import { Greeting } from "./Greeting";

// Import utility
import { formatDate } from "../utils/formatDate";

function App() {
  const today = new Date();
  const cword = _.capitalize("hello");

  return (
    <div>
      <h1>Welcome to the Main Branch</h1>

      <Header />
      <main>
        <Greeting name="React Developer" />
        <p>Today is {formatDate(today)}.</p>
      </main>
      <p>{cword}</p>
      <Footer />
    </div>
  );
}

export default App;

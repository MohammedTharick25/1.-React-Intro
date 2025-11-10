import React from "react";
import "./App.css";

// Import components
import Header from "./Header";
import Footer from "./Footer";
import { Greeting } from "./Greeting";

// Import utility
import { formatDate } from "./utils/formatDate";

function App() {
  const today = new Date();

  return (
    <div>
      <Header />
      <main>
        <Greeting name="React Developer" />
        <p>Today is {formatDate(today)}.</p>
      </main>
      <Footer />
    </div>
  );
}

export default App;

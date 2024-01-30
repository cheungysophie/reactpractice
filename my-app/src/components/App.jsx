import Header from "./Header";
import React from "react";
import Footer from "./Footer";
import './styles.css';
import Note from "./Note";

function App() {
    return (
        <div>
            <Header></Header>
            <section><Note></Note></section>
            <Footer></Footer>
        </div>
    );
}

export default App;
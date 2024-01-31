import Header from "./Header";
import React from "react";
import Footer from "./Footer";
import './styles.css';
import Sticky from "./Sticky";
import notes from '../notes';


function createCard(notes) {
    return (
        <Sticky
            key={notes.key}
            title={notes.title}
            content={notes.content}
        />
    )
}

function App() {
    return (
        <div>
            <Header></Header>
            <section>
                {notes.map(createCard)}
            </section>
            <Footer></Footer>
        </div>
    );
}

export default App;
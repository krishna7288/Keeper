import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";



function App() {
    return (
    <div>
        <Header />
        {notes.map(props =>
    
        <Note 
         key = "id "
         title={props.notes}  
         content={props.content}      
         />
        )}

        <Footer />
    </div>)
};

export default App;
import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import user from "../data/user";

function App(props) {
  return (
    <div>
      <NavBar />
      <Home name={user.name} city = {user.city} color={user.color}/>
      <About 
        bio={user.bio} 
        links={user.links}
      />
    </div>
  );
}

export default App;

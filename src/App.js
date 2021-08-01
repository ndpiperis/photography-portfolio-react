import React from "react";
import {BrowserRouter, Route} from 'react-router-dom';
import {Switch} from 'react-router';
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
   <BrowserRouter>
   <Switch>
     <Route exact path='/'>
       <HomePage />
     </Route>
     <Route path='/about'>
       <AboutPage />
     </Route>
   </Switch>
   </BrowserRouter>
  );
}

export default App;

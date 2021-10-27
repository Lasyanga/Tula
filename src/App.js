import { Switch, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Nav from "./components/layouts/Nav";
import Footer from "./components/layouts/Footer";
import Pahina from "./components/pages/tula/Pahina";
import Ako from "./components/pages/tula/Ako";
import Binibini from "./components/pages/tula/Binibini";
import Ilaw from "./components/pages/tula/Ilaw";

function App() {
  return (
    <div className="container-lg flex flex-col h-screen">
      <Nav />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/ako">
          <Ako />
        </Route>
        <Route path="/binibini">
          <Binibini />
        </Route>
        <Route path="/pahina">
          <Pahina />
        </Route>
        <Route path="/ilaw">
          <Ilaw />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

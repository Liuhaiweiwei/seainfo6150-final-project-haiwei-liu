import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./Home/homepage.jsx";
import Error from "./Error/Error.jsx";
import About from "./About/About.jsx";
import Tags from "./Tags/Tags";
import Follow from "./Follow/Follow";
import Blogs from "./Blogs/Blogs";


function App() {
  return (
    <Router>
      <div>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/blogs/Btitle">Blogs</Link>
                </li>
                <li>
                    <Link to="/tags">Tags</Link>
                </li>
                <li>
                    <Link to="/about">About Me</Link>
                </li>
                <li>
                    <Link to="/follow">Follow Me</Link>
                </li>
            </ul>
        </nav>
      </div>
        <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/about" exact component={About}></Route>
            <Route path="/tags" exact component={Tags}></Route>
            <Route path="/follow" exact component={Follow}></Route>
            <Route path="/blogs/:Btitle"
                   exact
                   render={({ match }) =>(
                       <Blogs
                           Btitle={match.params.Btitle}
                       />
                   )}>
            </Route>
            <Route component={Error}></Route>
        </Switch>
    </Router>
  );
}

export default App;
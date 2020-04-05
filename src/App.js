import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./Home/homepage.jsx";
import Error from "./Error/Error.jsx";
import About from "./About/About.jsx";
import Tags from "./Tags/Tags";
import Follow from "./Follow/Follow";
import Blogs from "./Blogs/Blogs";
import StudyTag from "./TagDetails/StudyTag";
import ChineseFood from "./TagDetails/ChineseFood";
import Travel from "./TagDetails/Travel";
import Fruit from "./TagDetails/Fruit";
import Relax from "./TagDetails/Realx";


function App() {
  return (
    <div>
        <header>Haiwei's Blog</header>
    <Router>
        <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/about" exact component={About}></Route>
            <Route path="/tags" exact component={Tags}></Route>
            <Route path="/follow" exact component={Follow}></Route>
            <Route path="/tags/study" exact component={StudyTag}></Route>
            <Route path="/tags/chinesefood" exact component={ChineseFood}></Route>
            <Route path="/tags/travel" exact component={Travel}></Route>
            <Route path="/tags/fruit" exact component={Fruit}></Route>
            <Route path="/tags/relax" exact component={Relax}></Route>
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
    </div>
  );
}

export default App;

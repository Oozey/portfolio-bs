import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home.js";
import About from "./components/About.js";
import SinglePost from "./components/SinglePost.js";
import Post from "./components/Post.js";
import Projects from "./components/Project.js";
import Art from "./components/Art.js";
import Photography from "./components/Photography.js";
import NavBar from "./components/NavBar.js";
import './App.css';

function App() {
  return (
    <BrowserRouter>
    
      <Switch>
        <Route component={Home} path='/' exact />
        <Route component={Photography} path='/photography' />
        <Route component={Art} path='/art' />
        <Route component={About} path='/about' />
        <Route component={SinglePost} path='/post:/slug' />
        <Route component={Post} path='/post' />
        <Route component={Projects} path='/project' />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

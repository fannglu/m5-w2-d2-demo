import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
  Outlet,
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>

        <Routes>
          <Route path="/about" element={<About />} />

          {/* Nested Routes */}
          <Route path="/topics" element={<Topics />}>
            <Route path="" element={<Info />} />
            <Route path=":topicId" element={<Topic />} />
          </Route>

          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

// add topic function
function Topics() {
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to="cats">Cats</Link>
        </li>
        <li>
          <Link to="dogs">Dogs</Link>
        </li>
      </ul>

      {/* Render Child routes (a new component to route cats and dogs) */}
      <Outlet />
    </div>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h3>About</h3>;
}

function Topic() {
  let { topicId } = useParams();
  return (<h3>Requested topic ID: {topicId} </h3>);
}

function Info() {
  return (
    <h3>Please select a topic above </h3>
  )
}

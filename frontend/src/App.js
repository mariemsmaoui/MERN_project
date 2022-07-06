import HomeScreen from "./Screens/HomeScreen";
import ProductScreen from "./Screens/ProductScreen";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
function App() {
  return (
    <Router>
      <div className="d-flex flex-column site-container">
        <header>
          <Navbar bg="dark" variant="dark">
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand>Amazona</Navbar.Brand>
              </LinkContainer>
            </Container>
          </Navbar>{" "}
        </header>
        <main>
          <Container>
            <Routes>
              <Route path="/product/:slug" element={<ProductScreen />} />
              <Route path="/" element={<HomeScreen />} />
            </Routes>
          </Container>
        </main>
        <footer>
          <div className="text-center">all right resrved @20222</div>
        </footer>
      </div>
    </Router>
  );
}

export default App;

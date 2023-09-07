import HomeScreen from "./Screens/HomeScreen";
import ProductScreen from "./Screens/ProductScreen";
import Badge from "react-bootstrap/Badge";
import Nav from "react-bootstrap/Nav";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { useContext } from "react";
import { Store } from "./Store";
import CartScreen from "./Screens/CartScreen";
import SigninScreen from "./Screens/SignInScreen";
import "@fortawesome/fontawesome-free/css/all.min.css";
import NavDropdown from "react-bootstrap/NavDropdown";
//routing
function App() {
  const { state ,dispatch : ctxDispatch} = useContext(Store);
  const { cart, userInfo } = state;
  const signoutHandler=()=>{

    ctxDispatch({
      type: "USER_SIGNOUT",
    });
    localStorage.removeItem('userInfo');

  } 
  return (
    <Router>
      <div className="d-flex flex-column site-container">
        <header>
          <Navbar bg="dark" variant="dark">
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand>Phone Shop</Navbar.Brand>
              </LinkContainer>
              <Nav className="me-auto">
                <Link to="/cart" className="nav-link">
                  Cart
                  {cart.cartItems.length > 0 && (
                    <Badge pill bg="danger">
                      {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                    </Badge>
                  )}
                </Link>
                {userInfo ? (
                  <NavDropdown title={userInfo.name} id="basic-nav-dropdown">
                    <LinkContainer to="/profile">
                      <Navbar.Brand>profile</Navbar.Brand>
                    </LinkContainer>
                    <LinkContainer to="/orderhisteory">
                      <Navbar.Brand>Order Histeory</Navbar.Brand>
                    </LinkContainer>
                  
                  <Link to="/signout" className="dropdown-item" onClick={signoutHandler}>Sign out 
                </Link>
                </NavDropdown>

                ) : (
                  <Link to="/signin" className="nav-link">
                    Sign In{" "}
                  </Link>
                )}
              </Nav>
            </Container>
          </Navbar>{" "}
        </header>
        <main>
          <Container className="mt-3">
            <Routes>
              <Route path="/product/:slug" element={<ProductScreen />} />
              <Route path="/cart" element={<CartScreen />} />
              <Route path="/signin" element={<SigninScreen />} />
              <Route path="/" element={<HomeScreen />} />
            </Routes>
          </Container>
        </main>
        <footer>
          <div className="text-center">all right resrved @2022</div>
        </footer>
      </div>
    </Router>
  );
}

export default App;

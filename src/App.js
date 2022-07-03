
import HomeScreen from "./Screens/HomeScreen";
import ProductScreen from './Screens/ProductScreen'

import { BrowserRouter as Router, Routes, Route, Link,} from "react-router-dom";

function App() {
  return (

    <Router>

    <div className="App">
      <header>
        <Link to="/">Amazona</ Link>
      </header>
      <main>
   
          <Routes>
          <Route path="/product/:slug" element={<ProductScreen />} />
          <Route path="/" element={<HomeScreen />} />
          </Routes>
      
        
      </main>
    </div>
    </Router>
  );
}

export default App;

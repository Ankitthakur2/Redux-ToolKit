import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from "./Components/product";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Provider } from "react-redux";
import store from "./Store/store";
import ProductList from "./Components/productlist";
export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Product />} />
          </Routes>
          <Routes>
            <Route path="/productlist" element={<ProductList />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </Provider>
  );
}

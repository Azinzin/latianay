import { BrowserRouter, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Link to="/products">Produk</Link>
      <Route path="/products" component={Products} />
      
    </BrowserRouter>
  );
}

const Products = () => {
    return <h1>Ini adalah halaman produk</h1>;
}

import ShowProducts from "../components/ShowProducts";
import AddProduct from "../components/AddProduct";
import ShowProduct from "../components/ShowProducts";
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import "../styles/App.css";

function Products() {
  const [products, setProducts] = useState([
    { name: "Durian", qty: 100, price: 50000, status: "Available" },
  ]);

  console.log(import.meta.env.VITE_MY_ENV);
  return (
    <div>
      <main className="flex min-h-[85vh] p-5">
        <ShowProducts products={products} />
        <AddProduct changeProducts={setProducts} />
      </main>
    </div>
  );
}

export default Products;

import ShowProducts from "../components/ShowProducts";
import AddProduct from "../components/AddProduct";
import ShowProduct from "../components/ShowProducts";
import { useState } from "react";
// import "../styles/App.css";

function Products() {
  const [products, setProducts] = useState([
    { name: "Durian", qty: 100, price: 50000, status: "Available" },
  ]);

  return (
    <div>
      <header className="p-5 h-[15vh] bg-red-400 text-2xl font-bold select-none">
        Product App
      </header>
      <main className="flex min-h-[85vh] p-5">
        <ShowProducts products={products} />
        <AddProduct changeProducts={setProducts} />
      </main>
    </div>
  );
}

export default Products;

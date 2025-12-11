import ShowProducts from "../components/ShowProducts";
import AddProductRedux from "../components/AddProductRedux";
import ShowProductsRedux from "../components/ShowProductsRedux";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import "../styles/App.css";

function Products() {
  return (
    <div>
      <main className="flex min-h-[85vh] p-5">
        <ShowProductsRedux />
        <AddProductRedux />
      </main>
    </div>
  );
}

export default Products;

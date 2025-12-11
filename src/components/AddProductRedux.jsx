import { useDispatch } from "react-redux";
import { useState } from "react";
import { addProducts } from "../redux/slices/products.slice";

function AddProductRedux() {
  const dispatch = useDispatch();

  const [product, setProduct] = useState({
    id: 0,
    name: "",
    qty: "",
    price: "",
    status: "",
  });

  const onChangeHandler = (e) => {
    setProduct((product) => {
      return { ...product, [e.target.name]: e.target.value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const newProduct = {};
    Object.assign(newProduct, {
      name: product.name,
      qty: product.qty,
      price: product.price,
      status: product.status == "" ? "Unavailable" : "Available",
    });

    dispatch(addProducts(newProduct));

    setProduct({
      //id: 0,
      name: "",
      qty: "",
      price: "",
      status: "",
    });
  };

  return (
    <aside className="w-[30vw] p-5 border-2 border-solid border-black">
      <form noValidate onSubmit={submitHandler}>
        <header className="text-center font-bold text-xl">Add Product</header>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={product.name}
            className="border-2 border-solid border-black p-1 w-full"
            onChange={onChangeHandler}
          />
        </div>
        <div>
          <label htmlFor="qty">Qty</label>
          <input
            className="border-2 border-solid border-black p-1 w-full"
            type="number"
            name="qty"
            id="qty"
            value={product.qty}
            onChange={onChangeHandler}
          />
        </div>
        <div>
          <label htmlFor="qty">Price</label>
          <input
            className="border-2 border-solid border-black p-1 w-full"
            type="number"
            name="price"
            id="price"
            value={product.price}
            onChange={onChangeHandler}
          />
        </div>
        <div>
          <label htmlFor="status">Status</label>
          <select
            className="border-2 border-solid border-black p-1 w-full"
            type="text"
            name="status"
            id="status"
            value={product.status}
            onChange={onChangeHandler}
          >
            <option value={""}>Choose Status</option>
            <option value={"Available"}>Available</option>
            <option value={"Unavailable"}>Unavailable</option>
          </select>
        </div>
        <div className="flex justify-end mt-5">
          <button
            type="submit"
            className="border-2 border-black border-solid p-1 cursor-pointer select-none"
          >
            Submit
          </button>
        </div>
      </form>
    </aside>
  );
}

export default AddProductRedux;

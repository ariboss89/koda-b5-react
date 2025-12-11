import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editProducts } from "../redux/slices/products.slice";
import { useLocation, useNavigate } from "react-router";

function EditProductRedux() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const location = useLocation();
  const { data } = location.state || {};

  const [product, setProduct] = useState({
    id: data.id,
    name: data.name,
    qty: data.qty,
    price: data.price,
    status: data.status,
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
      id: data.id,
      name: product.name,
      qty: product.qty,
      price: product.price,
      status: product.status == "" ? "Unavailable" : "Available",
    });

    dispatch(editProducts(newProduct));

    setProduct({
      id: 0,
      name: "",
      qty: "",
      price: "",
      status: "",
    });

    navigate("/products");
  };

  return (
    <div className="h-min-screen p-5 flex justify-center items-center">
      <form noValidate onSubmit={submitHandler} className="w-2/3">
        <header className="text-center font-bold text-xl">Edit Product</header>
        <div className="text-left">
          <label className="font-bold" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={product.name}
            className="border-2 border-solid border-black p-1 w-full"
            onChange={onChangeHandler}
          />
        </div>
        <div className="text-left mt-2">
          <label className="font-bold" htmlFor="qty">
            Qty
          </label>
          <input
            className="border-2 border-solid border-black p-1 w-full"
            type="number"
            name="qty"
            id="qty"
            value={product.qty}
            onChange={onChangeHandler}
          />
        </div>
        <div className="text-left mt-2">
          <label className="font-bold" htmlFor="qty">
            Price
          </label>
          <input
            className="border-2 border-solid border-black p-1 w-full"
            type="number"
            name="price"
            id="price"
            value={product.price}
            onChange={onChangeHandler}
          />
        </div>
        <div className="text-left mt-2">
          <label className="font-bold" htmlFor="status">
            Status
          </label>
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
    </div>
  );
}

export default EditProductRedux;

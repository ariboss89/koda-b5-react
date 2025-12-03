function AddProduct(props) {
  const { changeProducts } = props;
  const submitHandler = (event) => {
    event.preventDefault();
    const newProduct = {};
    Object.assign(newProduct, {
      name: event.target["product-name"].value,
      qty: event.target["product-qty"].value,
      price: event.target["product-price"].value,
      status: event.target["product-status"].value,
    });
    changeProducts((products) => {
      return [...products, newProduct];
    });
    event.target["product-name"].value = "";
    event.target["product-qty"].value = "";
    event.target["product-price"].value = "";
    event.target["product-status"].value = "0";
  };
  return (
    <aside className="w-[30vw] p-5 border-2 border-solid border-black">
      <form noValidate onSubmit={submitHandler}>
        <header className="text-center font-bold text-xl">Add Product</header>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="product-name"
            id="title"
            className="border-2 border-solid border-black p-1 w-full"
          />
        </div>
        <div>
          <label htmlFor="qty">Qty</label>
          <input
            type="number"
            name="product-qty"
            id="qty"
            className="border-2 border-solid border-black p-1 w-full"
          />
        </div>
        <div>
          <label htmlFor="qty">Price</label>
          <input
            type="number"
            name="product-price"
            id="price"
            className="border-2 border-solid border-black p-1 w-full"
          />
        </div>
        <div>
          <label htmlFor="status">Status</label>
          <select
            type="text"
            name="product-status"
            id="status"
            className="border-2 border-solid border-black p-1 w-full"
          >
            <option value={"0"} selected disabled>
              Choose Status
            </option>
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

export default AddProduct;

import RowProduct from "./RowProduct";

function TableProducts(props) {
  const { products } = props;
  return (
    <section className="flex-1 pl-5 pr-5">
      <table className="w-full">
        <thead className="border-2 border-collapse border-black">
          <tr className="text-center">
            <th>Product Name</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody className="border-2 border-solid border-black">
          {products.map((product, idx) => {
            return (
              <RowProduct
                key={idx}
                name={product.name}
                qty={product.qty}
                price={product.price}
                status={product.price}
              />
            );
          })}
        </tbody>
      </table>
    </section>
  );
}

export default TableProducts;

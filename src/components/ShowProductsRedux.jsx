import { useSelector } from "react-redux";
import RowProductRedux from "./RowProductRedux";

function TableProducts() {
  //const { products } = props;

  const productState = useSelector((state) => state.products);

  return (
    <section className="flex-1 pl-5 pr-5">
      <table className="w-full">
        <thead className="border-2 border-collapse border-black">
          <tr className="text-center">
            <th>Product Name</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="border-2 border-solid border-black">
          {productState.products.map((product, idx) => {
            return (
              <RowProductRedux
                key={idx}
                name={product.name}
                qty={product.qty}
                price={product.price}
                status={product.status}
                id={product.id}
              />
            );
          })}
        </tbody>
      </table>
    </section>
  );
}

export default TableProducts;

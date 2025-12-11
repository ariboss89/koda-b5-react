import { useDispatch } from "react-redux";
import { deleteProducts } from "../redux/slices/products.slice";
import EditProductRedux from "./EditProductRedux";
import { useNavigate } from "react-router";

function RowProduct(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <>
      <tr className="text-center border-2 border-solid border-black">
        <td>{props.name}</td>
        <td>{props.qty}</td>
        <td>{props.price}</td>
        <td>{props.status}</td>
        <td className="flex justify-center items-center">
          <button
            className="flex justify-center items-center text-white bg-red-500 border px-5 p-2 rounded-md"
            onClick={() => {
              dispatch(deleteProducts(props.id));
            }}
          >
            Delete
          </button>

          <button
            className="flex justify-center items-center text-white bg-green-500 border px-5 p-2 rounded-md"
            onClick={() => {
              navigate(`/products/${props.id}`, {
                state: {
                  data: {
                    id: props.id,
                    name: props.name,
                    qty: props.qty,
                    price: props.price,
                    status: props.status,
                  },
                },
              });
            }}
          >
            Edit
          </button>
        </td>
      </tr>
    </>
  );
}

export default RowProduct;

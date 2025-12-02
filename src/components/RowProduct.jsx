function RowProduct(props) {
  return (
    <tr className="text-center border-2 border-solid border-black">
      <td>{props.name}</td>
      <td>{props.qty}</td>
      <td>{props.price}</td>
      <td>{props.status}</td>
    </tr>
  );
}

export default RowProduct;

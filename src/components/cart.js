import { Button, Container, Image, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { clear, deletefromCart } from "../rtk/slices/cart-slice";


function Cart() {

  const carts = useSelector(state => state.cart);

  const totalPrices = carts.reduce((acc,product) => {
    acc += product.price * product.quantity;
    return acc;
  }, 0)

  const dispatch = useDispatch();
console.log(carts);
  return (
    <Container>
      <h1 className="py-5">Welcome To Cart</h1>
      <h3>Total Prices: {totalPrices.toFixed(2)}</h3>
      <Button
        variant="primary"
        onClick={() => dispatch(clear())}
        className="mb-4"
      >
        Clear Cart
      </Button>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Image</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {carts.map((cart) => (
            <tr key={cart.id}>
              <td>{cart.id}</td>
              <td>{cart.title}</td>
              <td>
                <Image
                  src={cart.image}
                  style={{ width: "100px", height: "100px" }}
                />
              </td>
              <td>{cart.price}</td>
              <td>{cart.quantity}</td>
              <td>
                <Button
                  variant="danger"
                  onClick={() => dispatch(deletefromCart(cart))}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default Cart;

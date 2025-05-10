import Button from "../../ui/Button";
import { formatCurrency } from "../../utilities/helpers";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="py-3">
      <p>
        {quantity}&times; {name}
      </p>
      <div>
        <p>{formatCurrency(totalPrice)}</p>
        <Button>Delete</Button>
      </div>
    </li>
  );
}

export default CartItem;

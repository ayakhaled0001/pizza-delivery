import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { decreaseItemQuantity } from "./cartSlice";

function UpdateItemQuantity({ pizzaId }) {
  const dispatch = useDispatch();
  return (
    <div className="flex gap-1 items-center">
      <Button onClick={() => dispatch(decreaseItemQuantity(pizzaId))}>-</Button>
      <Button>+</Button>
    </div>
  );
}

export default UpdateItemQuantity;

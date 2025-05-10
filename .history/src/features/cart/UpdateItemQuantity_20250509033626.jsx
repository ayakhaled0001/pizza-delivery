import { useDispatch } from "react-redux";
import Button from "../../ui/Button";

function UpdateItemQuantity({ pizzaId }) {
  const dispatch = useDispatch();
  return (
    <div className="flex gap-1 items-center">
      <Button onClick={()=>}>-</Button>
      <Button>+</Button>
    </div>
  );
}

export default UpdateItemQuantity;
